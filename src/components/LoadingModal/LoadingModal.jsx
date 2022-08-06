import React, {useState} from 'react'
import {
    CircularProgress,
} from '@mui/material';
import { useSelector} from 'react-redux'
import './LoadingModal.css'

const LoadingModal = () => {
  const data = useSelector(state => state.poi)
  console.log(data.length)
  return (
    <div className={`${data.length === 0 ? 'hide' : ''}`}>
          <div className={`modal_mask`}>
        <div className='modal_panel'>
        <CircularProgress />  
        </div>
    </div>
    </div>
  )   
}

export default LoadingModal