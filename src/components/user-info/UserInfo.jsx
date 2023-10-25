import React from 'react'
import './user-info.scss'
import {Button, Grid,Stack} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const UserInfo = ({ user }) => {
    return (
        <Grid  className='user-info Dashboard-page-button-section'>
            
             
            <Grid item xs={8} container direction="row" justifyContent="flex-start" alignItems="center" className="user-info__name">
                <span>{user.Date}</span>
            </Grid> 
            <Grid item xs={8} container direction="row" justifyContent="flex-end" alignItems="center" className="user-info__img ">
            <Stack direction="row" spacing={2}>
                <Button  className="Dashboard-one-button-section" variant="outlined">Auto Questionaire</Button>
                <Button  className="Dashboard-two-button-section" variant="contained"> <AddIcon/>Add Job</Button>
              </Stack>
            </Grid>
            
        </Grid>
    )
}

export default UserInfo
