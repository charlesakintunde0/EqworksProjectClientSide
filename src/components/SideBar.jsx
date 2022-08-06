import React, {useState} from 'react'
import {
  Box,
  Grid,
  AppBar,
  createStyles
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import moment from 'moment';


const SideBarStyles = makeStyles(() =>
  createStyles({
    sidebarBox : {
        position : 'absolute',
        top:'70px',
        right:'0',
        backgroundColor:'#1976D2',
        width: '250px',
        height: '100vh'
    }
  })
);

const SideBar = () => {
    const classes = SideBarStyles()
  return (
     <Box className={classes.sidebarBox}>
          SideBar
     </Box>
  )
}

export default SideBar