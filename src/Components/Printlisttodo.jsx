import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Icon from '@material-ui/core/Icon';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import CreateIcon from '@material-ui/icons/Create';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { Get, post, put, delete1 } from './Slice';


import InputBase from '@material-ui/core/InputBase';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useEffect } from 'react';

import { Grid, Hidden, Paper } from '@material-ui/core';
import { useState } from 'react';


const Printlisttodo = () => {

    const disPatch = useDispatch()
    // disPatch(get({url:"https://localhost:7131/api/getalltodos"}));

    const tasks = useSelector((state) => state.tasks.tasks);

    const data = useSelector((state) => state.data)
    const isLoading = useSelector((state) => state.isLoading)
    //const { data, isLoading } = useSelector((state) => state.todos);


    //    const [tasks2, Get] = useState([]);
    //מכאן זה המעודכן
    useEffect(() => {

        const fetchData = async () => {

            try {
                const data = await fetchData({ url: "https://localhost:7131/api/getalltodos" });
                //disPatch(delete1(data));
               console.log("data:");
               console.log(data.data);
                console.log(data);
            } catch (error) {
                // Handle the error
                console.log(error);
            }
        }
        fetchData();
    }, [])

    //עד כאן


    // const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(getTodos());
    // }, [])




    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await disPatch(
    //                 Get({ url: "https://localhost:7131/api/getalltodos" })
    //             );
    //            // setTasks(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    //   return (
    //     <div>
    //       {tasks.map((task) => (
    //         <div key={task.id}>{task.title}</div>
    //       ))}
    //     </div>
    //   );






    const handlediscreptionChange = (e, pitem) => {
        const updatedDescription = e.target.value;
        if (e.key === 'Enter') {
            debugger
            disPatch(put({ url: "https://localhost:7131/api/ChangeTodo", newobj: { itemId: pitem.id, descreprion: updatedDescription, disable: true, date: "12/12/12", status: pitem.status } }));
            //   disPatch(get({url:"https://localhost:7131/api/getalltodos"}));

        }

        else {

            disPatch(put({ url: "https://localhost:7131/api/ChangeTodo", newobj: { itemId: pitem.id, descreprion: updatedDescription, disable: false, date: "12/12/12", status: pitem.status } }));
            //    disPatch(get({url:"https://localhost:7131/api/getalltodos"}));
        }

    }

    return (
        <div>

            <Grid container spacing={3}>
                {tasks.map((item) => (
                    <Grid item xs={12} key={item.id}>
                        <Paper>
                            <Grid container spacing={3}>
                                <Grid item xs>
                                    <Checkbox color="rgb(234, 137, 137)" onClick={() => disPatch(put({ url: "https://localhost:7131/api/ChangeTodo", description: item.descreprion, itemId: item.id, disable: item.disable, status: !(item.status) }))} type="checkbox" checked={item.status} />

                                    <span onClick={() => disPatch(put({ url: "https://localhost:7131/api/ChangeTodo", itemId: item.id, disable: false, description: item.descreprion, status: item.status }))}> <CreateIcon /></span>

                                    <span onDoubleClick={() => disPatch(delete1({ url: "https://localhost:7131/api/deleteTodo?id=2" }))}><DeleteForeverIcon /></span>
                                </Grid>
                                <Grid item xs>
                                    <InputBase
                                        placeholder={item.descreprion}

                                        value={item.descreprion}
                                        disabled={item.disable}
                                        onKeyDown={(e) => handlediscreptionChange(e, item)}
                                        onChange={(e) => handlediscreptionChange(e, item)}

                                    />
                                </Grid>
                            </Grid>
                        </Paper><br></br>
                    </Grid>
                ))}
            </Grid>
        </div>

    )

}
export default Printlisttodo

