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
    const newPost = {
      content: content,
      id: id.current++,
      disable: false,
      name: name,
      like: false
    };
    dispatch(post( {url:"https://localhost:7131/api/addPost",item:newPost}))

  }

  
  const handlediscreptionChange = (e, pitem) => {
    const updatedDescription = e.target.value;
    if (e.key === 'Enter') {
      dispatch(put({ url: "https://localhost:7131/api/ChangePost",newobj:{ itemId: pitem.id, name: pitem.name, content: updatedDescription,like: pitem.like, disable: true } }));
    }
    else {
      dispatch(put({ url: "https://localhost:7131/api/ChangePost",newobj:{ itemId: pitem.id, name: pitem.name, content: updatedDescription,like: pitem.like, disable: true} }));
    }
    
   }

  return (
    <div>
      {posts.map((item) => {
        ; return <> <div style={{ border: 'solid 2px black' }} >
          <h2>{item.name}<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}></Checkbox></h2><input disabled={item.disable} value={item.content} onChange={(e) => handlediscreptionChange(e, item)} onKeyDown={(e) => handlediscreptionChange(e, item)}
          ></input>
          <div onClick={() => dispatch(delete1({url:`https://localhost:7131/api/deletePost?id=${item.id}` }))}><DeleteForeverIcon />
          </div><div onClick={() => dispatch(put({url:"https://localhost:7131/api/ChangePost",newobj:{itemId: item.id, name: item.name,content: item.content,  like: item.like, disable: false} }))}><CreateIcon /></div></div> </>
      })}

      <div>{add === true ? <p onClick={() => setAdd(!add)}>הוסף משימה+</p> : <><input  onChange={(e) => setname(e.target.value)} value={name}></input><input onChange={(e) => setcontent(e.target.value)} value={content}>
      </input> <button onClick={()=>handleClick()}>כפתור</button></>}</div>
    </div>

  )

}


export default Posts


