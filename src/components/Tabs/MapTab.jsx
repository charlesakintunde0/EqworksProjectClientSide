import React, {useState} from 'react'
import { useSelector} from 'react-redux';

import {
    Box,
    Grid,
    createStyles,
  
    Paper, 
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Typography
  } from '@mui/material';
  import { makeStyles } from '@mui/styles';
  import moment from 'moment';


  import { Chart } from '../Chart'
  import Map from '../Map/Map';

  const MapTabStyles = makeStyles(() =>
  createStyles({
    container : {
      // padding:30,
    },
    dashboardMainGraphPaper: {
      padding:30,

    },
    dashBoardfilterText : {
      fontFamily: 'Josefin Sans',
      fontSize:'13px',
    },
    apexChartContainer: {
      '& .apexcharts-canvas': {

      }
    },
    tablePaper: {
      marginBottom: 25
    },
    dashboardMapPaper: {
      marginTop: 20,
      width:'100%'
    
    },
    dashboardMapGrid : {
      padding: 10
    },
    mapBox: {

    }
    // dashboardMapBox: {
    //   position: "absolute"
    // }
  })
);



const MapTab = () => {
    const classes = MapTabStyles()
    const chartData = useSelector(state => state)
    const [selectedMapMetricsData, setSelectedMapMetricsData] = useState({
        selectedMapDate: 'Jan 1, 2017',
        selectedMapMetrics: 'Stats',
   
      })


    const handleSelectedMapMetricsData = (event) => {
        const value = event.target.value
        setSelectedMapMetricsData({
          ...selectedMapMetricsData,[event.target.name]: value
        })
      }
  return (
    <Paper className={classes.dashboardMapPaper}>

      <Box className={classes.dashboardMapBox}>
      <Grid container className={classes.dashboardMapGrid} spacing={3}>
        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Select Event Day</InputLabel>
            <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={selectedMapMetricsData.selectedMapDate}
             label="graphTime"
             name = "selectedMapDate"
             onChange={handleSelectedMapMetricsData}>
             {
              chartData.events_per_day.map(eventData => (
                <MenuItem value={moment(eventData.date).format('ll')}>{moment(eventData.date).format('ll')}</MenuItem>
              ))
            
             }
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Geo Visualize by</InputLabel>
            <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={selectedMapMetricsData.selectedMapMetrics}
             label="graphTime"
             name = "selectedMapMetrics"
             onChange={handleSelectedMapMetricsData}>   
                <MenuItem value="Events">Events</MenuItem>
                <MenuItem value="Stats">Stats</MenuItem>
              
          
            </Select>
          </FormControl>
        </Grid>
        </Grid>
      <Box className="mapBox">
      <Map data={chartData} selectedMapMetricsData={selectedMapMetricsData}/>
      </Box>
      </Box>
    </Paper>

  )
}

export default MapTab