import React, { useEffect, useState } from 'react'
import Communication from '../common/communication'
import Dropdown from '../common/Dropdown'
import Wait from '../common/wait'
import './index.scss'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Loader } from 'rsuite';
const Hero = ({data,loading}) => {
    const scripts = data?.getScripts
    console.log(scripts)
    const names = scripts?.map(script => script.name);
    const [name,setName] = useState("Select script")
    const [variant,setVariant] = useState("Select variant")
    const [variants,setVariants] = useState(null)
    const [selectedVarient,setSelectedVariant] = useState(null)
    useEffect(()=>{
        let selectedScript = scripts?.filter((item=>(item.name === name)))
        let selectedVariants = selectedScript?.[0]?.variants
        setVariant("Select variant")
        setVariants(selectedVariants)
    },[name])

    useEffect(()=>{
        let selected = variants?.filter((item=>(item.name === variant)))
        setSelectedVariant(selected?.[0])
    },[variant])
    const variantsNames = variants?.map(variant => variant.name); 
    const  definition = selectedVarient &&  JSON.parse(selectedVarient.definition)
    console.log(definition)


    return (
        <div className="hero-wrapper">
          
            <div className="content-wrapper container">
                <h1>Trades.org ALM Viewer</h1>
                <div className="content-wrapper">
                    {loading ? <Loader content="Loading scripts ..." vertical/> : <div className="selects-wrapper">
                    <Dropdown options={names} name={name} setName={setName}/>
                    {variantsNames && <Dropdown options={variantsNames} name={variant} setName={setVariant}/>}
                    
                </div>}
                </div>
                {selectedVarient &&  <div className="description">
                    {selectedVarient?.description}
                </div>}
                {selectedVarient && <div className="variant-wrapper">
                    {definition.steps.map((step,index)=>(
                        <React.Fragment>
                            {step.action === "communication" ? <Communication data={step}/> :
                             step.action === "wait" ?
                            <Wait data={step}/> : null}
                            {index < definition.steps.length-1 &&  <div className="arrow-down"><AiOutlineArrowDown color=" #888" size={32}/></div>}
                           
                        </React.Fragment>
                        
                    ))}
                    
                    </div>}
               
                
                
            </div>

        </div>
    )
}

export default  Hero
