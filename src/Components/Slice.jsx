import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import axios from "axios";

const initialvalue = {
    tasks: [{ disable: true, descreprion: "jbbj", status: false, date: "10/52/8552", id: -1 }, { disable: true, descreprion: "jbbj", status: false, date: "10/52/8552", id: -2 }, { disable: true, descreprion: "jbbj", status: true, date: "10/52/8552", id: -6 }],
    //tasks: [],
    posts: [{ id: 1, name: "חיה", content: "היייי", like: false, disable: true }],
    users: [{ id: 2, name: "rachel", address: "chatam-sofer1", email: "rachel@gmail.com", phone: "089741508" }]
}

const Slice = createSlice({
    name: "-----",
    initialState: initialvalue,
    reducers: {
        putToDo: (state, actoins) => {
            state.tasks.map((item =>

                item.id === actoins.payload.itemId ? (item.descreprion = actoins.payload.description, item.disable = actoins.payload.disable, item.status = actoins.payload.status) : false)

            );
        },

        put: (state, actoins) => {

            switch (actoins.payload.url) {
                case "https://localhost:7131/api/ChangeTodo":
                    state.tasks.map((item =>

                        item.id === actoins.payload.itemId ? (item.descreprion = actoins.payload.description, item.disable = actoins.payload.disable, item.status = actoins.payload.status) : false)

                    );


                    break;
                case "https://localhost:7131/api/ChangePost":

                    state.posts.map((item =>

                        item.id === actoins.payload.itemId ? (item.content = actoins.payload.content, item.disable = actoins.payload.disable, item.like = actoins.payload.like, item.name = actoins.payload.name) : false)

                    );

                    break;
                default:
                    break;
            }
            const updateToDo = async () => {
                try {

                    const response = await axios.put(actoins.payload.url, actoins.payload.newobj)
                    console.log("succes put");
                }
                catch (error) {
                    console.log(error);
                }
            };

            updateToDo();
        },
        post: (state, actoins) => {
            switch (actoins.payload.url) {
                case "https://localhost:7131/api/addPost":
                    state.posts = [...state.posts, actoins.payload.item]

                    break;
                case "https://localhost:7131/api/addTodo":
                    state.tasks = [...state.tasks, actoins.payload.item]
                    break;
                default:
                    break;
            }
            // const handleClick = async () => {
            const addTask = async () => {
                try {
                    const response = await fetch(actoins.payload.url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(actoins.payload.item)
                    })
                    const data = await response.json();
                }
                catch (error) {
                    console.log(error);
                    console.log("catch");
                }
            }
            addTask()

        },


            Get: (state, actions) => {
                const fetchData = async (url) => {
                    try {
                      const response = await axios.get(url);
                      console.log(response.data);
                      return response.data;
                    } catch (error) {
                      console.log(error);
                      throw error;
                    }
                  };
                  fetchData(actions.payload.url)
              },
              

            delete1: (state, actoins) => {
                switch (actoins.payload.url) {
                    case 'https://localhost:7131/api/deleteTodo':
                        state.tasks = state.tasks.filter(item => item.id !== actoins.payload.item.id)
                        break;
                    case 'https://localhost:7131/api/deletePost':
                        state.posts = state.posts.filter(item => item.id !== actoins.payload.item.id)
                    default:
                        break;
                }

                const deleteTask = async () => {
                    try {

                        const response = await fetch(actoins.payload.url, {
                            method: 'DELETE'
                        });
                        //const data = await response.json();

                    } catch (error) {
                        console.error();
                    }
                }
                deleteTask();
            }


        }
    })

export const { put, Get, post, delete1, putToDo } = Slice.actions
export default Slice.reducer