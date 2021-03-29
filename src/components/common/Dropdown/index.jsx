import './index.scss'
import React, { useState } from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
const Dropdown = ({options,name,setName}) => {
    const [open,setopen] = useState(false)
    return (
             <div  className={`dropdown ${open ? "active" : ""}`}>
            <button onClick={()=> setopen((prev)=>!prev)} className="dropbtn"><span>{name}</span><span>{<AiOutlineArrowDown/>}</span></button>
            <div className="dropdown-content">
                {options?.map((option,index)=>( <span  key={index} onClick={()=>{
                    setName(option)
                    setopen(false)
                }}>{option}</span>))}
            </div>
            </div>
    )
}

export default Dropdown
