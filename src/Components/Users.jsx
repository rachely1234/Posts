import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import CreateIcon from '@material-ui/icons/Create';
import { delete1, post, put } from './Slice';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [add, setAdd] = useState(true)
  const [name, setname] = useState('')
  const [address,setAddress]=useState('')
  const [email,setemail]=useState('')
  const [phone,setphone]=useState('')
  const id = useRef(0)

  const handleClick = () => {
    const newUser = {
      email: email,
      id: id.current++,
      disable: false,
      name: name,
      phone:phone
    };
    dispatch(post( {type: "users",item:newUser}))
  }
  const handlediscreptionChange = (e, pitem) => {
    const updatedDescription = e.target.value;
    if (e.key === 'Enter') {
      dispatch(put({ type: "users", itemId: pitem.id, email: pitem.email, disable: true, name: pitem.name }));
    }
    else {
      dispatch(put({ type: "users", itemId: pitem.id, content: updatedDescription, disable: false, like: pitem.like, name: pitem.name }));
    }


  }


  return (
    <div>
    {users.map((item) => {
      ; return <> <div style={{ border: 'solid 2px black' }} >
        <h2>{item.name}<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}></Checkbox></h2><input disabled={item.disable} value={item.content} onChange={(e) => handlediscreptionChange(e, item,name)} onKeyDown={(e) => handlediscreptionChange(e, item,)}
        ></input>
       
        </div>
         </>
    })}

   
  </div>
  )
}

export default Users