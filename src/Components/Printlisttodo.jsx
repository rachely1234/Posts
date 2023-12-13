import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Icon from '@material-ui/core/Icon';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import CreateIcon from '@material-ui/icons/Create';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { post, put, delete1 } from './taskSlice';

import { Grid, Paper } from '@material-ui/core';

const Printlisttodo = () => {
    const Tasks = useSelector((myStore) => myStore.tasks.tasks)
    const disPatch = useDispatch()



    return (

        <>


            {
                Tasks.map((item) => {
                    return
                    <Grid container spacing={3}>
                        

                        <Grid item xs={12} sm={6}>
                            <Paper>{item.discreption}</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper ><CreateIcon /></Paper>
                        </Grid>
                    </Grid>



                    // return <><p>{item.discreption}</p><div > <CreateIcon/></div><div onDoubleClick={disPatch(delete1(item))}><DeleteForeverIcon/></div><input type="checkbox"checked={item.status}/><p>{item.date}  </p> </>


                })
            }
        </>


    )
}

export default Printlisttodo