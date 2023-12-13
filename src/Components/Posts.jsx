import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import CreateIcon from '@material-ui/icons/Create';

import { delete1, post, put } from './Slice';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const [add, setAdd] = useState(true)
  const [name, setname] = useState('')
  const [content, setcontent] = useState('')
  const id = useRef(0)
  const handleClick = () => {

    debugger

    const newPost = {
       content:content,
         id:id.current++,
         disable:false,
         name:name,
        like:false
    };

    dispatch(post(newPost))


};
  return (
    
    <div>   
        {posts.map((item) => {; return<> <div style={{border:'solid 2px black'}} >
          <h2>{item.name}<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}></Checkbox></h2><input disabled={item.disable} value={item.content} ></input>
        <div onClick={()=>dispatch(delete1({item:item,type:"posts"}))}><DeleteForeverIcon />
        </div><div onClick={() => dispatch(put({type:"posts", itemId: item.id, disable: false, content: item.content, like: item.like,name:item.name }))}><CreateIcon /></div></div> </>})}  
    </div>

  )

}

export default Posts


