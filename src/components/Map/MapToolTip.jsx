import React from 'react'
import {Tooltip } from 'react-leaflet'
import {
    Box,
    createStyles
  } from '@mui/material';
  import { makeStyles } from '@mui/styles';
  
  
  
  
  const MapToolTipStyles = makeStyles(() =>
    createStyles({
        tooltipMetrics: {
            textAlign: 'left',
            lineHeight:0.5,
            
        },
        tooltipMetricsSpan: {
            color: '#4289C1',
            fontWeight: 'bold',
        }
    
    })
  );



const MapToolTip = ({eventsData,statsData,stats}) => {
    const classes = MapToolTipStyles()

    const StatsToolTip = () => {
        return (
            <Tooltip>
                 <Box>
                <p className={classes.tooltipMetrics}>Location: <span className={classes.tooltipMetricsSpan}>{statsData.name}</span></p>
                <p className={classes.tooltipMetrics}>Clicks: <b>{statsData.clicks}</b></p>
                <p className={classes.tooltipMetrics}>Impressions: <b >{Math.round(statsData.impressions)}</b></p>
                <p className={classes.tooltipMetrics}>Revenue: <b>${Math.round(statsData.revenue)}</b></p>
             </Box>
            </Tooltip>
        )
    }
    

    const EventsToolTip = () => {
        return (
           <Tooltip>
             <Box>
                <p className={classes.tooltipMetrics}>Location: <span className={classes.tooltipMetricsSpan}>{eventsData.name}</span></p>
                <p className={classes.tooltipMetrics}>Events hosted: <b>{eventsData.events}</b></p>
             </Box>
           </Tooltip>
        )
    }
  return (
     <>
    {stats  ? <StatsToolTip/> : <EventsToolTip/>}
    </>
  )
}

export default MapToolTip