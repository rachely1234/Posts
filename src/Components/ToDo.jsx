import { Input } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core';
import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { post, put,get } from './Slice';
import Printlisttodo from './Printlisttodo';





const ToDo = () => {

   
    const dispatch = useDispatch();



    const [add, setAdd] = useState(true)
    const [description, setDescription] = useState('')
    const id=useRef(0)
    const refdate = useRef("10/11/2020")
    const handleClick = () => {

        

        const newTask = {
            descreprion: description,
            date: refdate.current,
            status: false,
             id:id.current++,
             disable:false,
        };

    
        dispatch(post({url: "https://localhost:7131/api/addToDo",item:newTask}))
        
        
        


    };



    const handleDate = (e) => {
        refdate.current = e.target.value
    }
    return (
        <div style={{backgroundColor:"rgb(234, 137, 137)",width:"100%",height:"100vh",backgroundImage: 'url(../src/logo.svg)'}}>
        <Printlisttodo/>
            
            <div>{add === true ? <p onClick={() => setAdd(!add)}>הוסף משימה+</p> : <><input onChange={(e) => setDescription(e.target.value)} value={description}>
            </input><input type="date" onChange={(e) => handleDate(e)} /> <button onClick={handleClick}>כפתור</button></>}</div>
  
            </div>

        
    )
}

export default ToDo