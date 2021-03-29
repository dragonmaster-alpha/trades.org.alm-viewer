import './index.scss'
import React from 'react'

const Wait = ({data}) => {
    let delay
    if(data && data.random){
        const random = data && data.random && data.random.length && data?.random[Math.floor(Math.random() * data?.random?.length)];
         delay = random && Object.entries(random)[0]
    }
    else if (data && !data.random){ 
        delay = data?.delay && Object.entries(data.delay)[0]
    }
 

    return (
        <div className="wait-main">
        {delay &&  `Wait ${delay[1]}  ${delay[0]}` }
        
        </div>
    )
}

export default Wait