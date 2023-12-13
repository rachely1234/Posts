import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialvalue = {
     tasks: [{ disable:true,descreprion: "jbbj", status: false, date: "10/52/8552", id: -1 }, { disable:false,descreprion: "jbbj", status: false, date: "10/52/8552", id: -2 }, {disable:false, descreprion: "jbbj", status: true, date: "10/52/8552", id: -6 }],
     posts:[{id:1,name:"חיה",content:"היייי",like:false,disable:true}]
}
const Slice = createSlice({
    name: "-----",
    initialState: initialvalue,
    reducers: {
        putToDo:(state, actoins)=>{
            state.tasks.map((item=>
            
                item.id===actoins.payload.itemId?(item.descreprion=actoins.payload.description,item.disable=actoins.payload.disable,item.status=actoins.payload.status):false)
                     
            );
        },

        put: (state, actoins) => {

            switch (actoins.payload.type) {
                case "tasks":
                    state.tasks.map((item=>
            
                        item.id===actoins.payload.itemId?(item.descreprion=actoins.payload.description,item.disable=actoins.payload.disable,item.status=actoins.payload.status):false)
                             
                    );

                
                    break;
                   case "posts":

                   state.posts.map((item=>
            
                    item.id===actoins.payload.itemId?(item.content=actoins.payload.content,item.disable=actoins.payload.disable,item.like=actoins.payload.like,item.name=actoins.payload.name):false)
                         
                );

                      break;
                default:
                    break;
            }
           
       

        },
        post: (state, actoins) => {

            
            const handleClick = async () => {

                try {
                    

                    state.tasks = [...state.tasks, actoins.payload]
                    const response = await fetch('https://localhost:3000', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(actoins.newTask)

                    })
                    const data = await response.json();
                    // console.log(data);

                } catch (error) {
                    

                }
            }
            handleClick()

        },

        get: (state, actoins) => {


        },

        delete1: (state, actoins) => {
            switch (actoins.payload.type) {
                case 'tasks':
                    state.tasks = state.tasks.filter(item => item.id !==actoins.payload.item.id)
                    break;
                case 'posts':  
                state.posts = state.posts.filter(item => item.id !==actoins.payload.item.id)
                default:
                    break;
            }

            const deleteTask = async () => {
                try {
                    const response = await fetch('', {
                        method: 'DELETE'
                    });
                    const data = await response.json();

                } catch (error) {
                    console.error();
                }
            }
            deleteTask();
        }


    }
})

export const { put, get, post, delete1,putToDo } = Slice.actions
export default Slice.reducer