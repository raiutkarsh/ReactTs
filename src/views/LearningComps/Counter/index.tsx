import React, { useState } from 'react'
const Increment:React.FC = ()=>{
    const [count,setCount] = useState<number>(0);
    const increment = ()=>{
        setCount(count+1)
    }
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log("button clicked",event)
    }
    return(
        <div>
            Count: {count}
            <button onClick={increment}>Increment</button>
            <button onClick={handleClick}>Handle Click</button>
        </div>
    )
}
export default Increment;