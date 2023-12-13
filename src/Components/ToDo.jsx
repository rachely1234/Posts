import { Input } from '@material-ui/core'
import React from 'react'
import { useState, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'


import { post, put } from './taskSlice';






const ToDo = () => {


   const dispatch = useDispatch();
    const b=useSelector((myStore)=>myStore.taskSlice

   )
   
    
    const [add, setAdd] = useState(true)
    const [description, setDescription] = useState('')
    const refdate=useRef("10/11/2020")
    const handleClick =  () => {
        
        debugger
       
            const newTask = {
                description: description,
                date:refdate.current,
                status: false

            };
            
            dispatch(post(newTask))
            
           
    };



    const handleDate=(e)=>{
       refdate.current=e.target.value
    }
    return (
        <>
            <div>ToDo</div>
            <div>{add === true ? <p onClick={() => setAdd(!add)}>הוסף משימה+</p> : <><input onChange={(e) => setDescription(e.target.value)} value={description}>
            </input><input type="date" onChange={(e)=>handleDate(e)} /> <button onClick={handleClick}>כפתור</button></>}</div>
            {description}
            {refdate.current}
            
        </>
    )
}

export default ToDo