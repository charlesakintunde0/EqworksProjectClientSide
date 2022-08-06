import React, {useState} from 'react'
import { useSelector} from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import MUIDataTable from "mui-datatables";
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

import * as tableData from '../TableData';
import Map from '../Map/Map';
import { Chart } from '../Chart';
import moment from 'moment';


const DashboardStyles = makeStyles(() =>
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
      marginTop: 20
    
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


const Dashboard = () => {
   const [metricsTime, setMetricTime] = useState('Hour')
   const [graphMetrics, setGraphMetrics] = useState('Clicks vs Revenue')
   const [selectedDate, setSelectedDate] = useState('Jan 1st 17')
   const [selectedMapMetricsData, setSelectedMapMetricsData] = useState({
     selectedMapDate: 'Jan 1, 2017',
     selectedMapMetrics: 'Events',

   })
    const chartData = useSelector(state => state)
    const classes = DashboardStyles()

    const handleMetricTimeChange = (event) => {
      setMetricTime(event.target.value );
    };

    const handleGraphMetricsChange = (event) => {
      setGraphMetrics(event.target.value );
    }
    
    const handleSelectedDateChange = (event) => {
      setSelectedDate(event.target.value)
    }

    const handleSelectedMapMetricsData = (event) => {
      const value = event.target.value
      setSelectedMapMetricsData({
        ...selectedMapMetricsData,[event.target.name]: value
      })
    }

    const PoiData = chartData?.poi

    const EventsData = chartData?.events_per_day

    const StatsData = chartData?.stats_per_day

 
  return (
    <Box className={classes.container}>
      
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.dashboardMainGraphPaper}>
          {/* <Typography variant='h3' className={classes.dashBoardfilterText}>
        Graph Filter
      </Typography> */}
          <Box>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Show Metrics Per</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={metricsTime}
                 label="graphTime"
                 onChange={handleMetricTimeChange}>
          <MenuItem value={'Hour'}>Hour</MenuItem>
          <MenuItem value={'Day'}>Day</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs = {4}>
            <FormControl fullWidth size="small">
                <InputLabel>Choose metrics</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={graphMetrics}
                 label="graphTime"
                 onChange={handleGraphMetricsChange}>
            <MenuItem value={'Clicks vs Revenue'}>Clicks vs Revenue</MenuItem>
            <MenuItem value={'Clicks'}>Clicks</MenuItem>
            <MenuItem value={'Impressions'}>Impressions</MenuItem>
            <MenuItem value={'Revenue'}>Revenue</MenuItem>
            <MenuItem value={'Events'}>Events</MenuItem>
           
                </Select>
              </FormControl>

            </Grid>

            <Grid item xs = {4}>
            <FormControl fullWidth size="small">
                <InputLabel>Choose Date</InputLabel>
                <Select disabled={metricsTime === 'Hour' ? false : true}
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={selectedDate}
                 label="graphTime"
                 onChange={handleSelectedDateChange}>
            <MenuItem value={'Jan 1st 17'}>1st January 2017</MenuItem>
            <MenuItem value={'Jan 2nd 17'}>2nd January 2017</MenuItem>
            <MenuItem value={'Jan 3rd 17'}>3rd January 2017</MenuItem>
            <MenuItem value={'Jan 4th 17'}>4th January 2017</MenuItem>
            <MenuItem value={'Jan 5th 17'}>5th January 2017</MenuItem>
            <MenuItem value={'Jan 6th 17'}>6th January 2017</MenuItem>
            <MenuItem value={'Jan 7th 17'}>7th January 2017</MenuItem>
           
                </Select>
              </FormControl>

            </Grid>
          </Grid>
          </Box>

          <Box className={classes.apexChartContainer}>
            {/* <ReactApexChart {...RevenueVsImpressionsChart(chartData.stats_per_day)}/> */}
            <ReactApexChart  {...Chart(chartData.stats_per_day, chartData.stats_per_hour, chartData.events_per_day, chartData.events_per_hour, graphMetrics,metricsTime, selectedDate) } />
          </Box>
        </Paper>
      </Grid>
   <Grid item xs= {12}>
    <Paper className={classes.dashboardMainGraphPaper}>
    <MUIDataTable
          title={"POI TABLE"}
          data={PoiData}
          columns={tableData.PoiColumns}
          options={tableData.PoiOptions}
          
        />
    </Paper>
    </Grid>
   <Grid item xs={12}>
   <Paper className={classes.dashboardMainGraphPaper}>
    <MUIDataTable
          title={"Events Per Day"}
          data={EventsData}
          columns={tableData.EventColumns}
          options={tableData.eventsOptions}
          
        />
 </Paper>
   </Grid>
  
       <Grid item xs={12}>
        <Paper className={classes.dashboardMainGraphPaper}>
        <MUIDataTable
          title={"Stats Per Day"}
          data={StatsData}
          columns={tableData.statsColumn}
          options={tableData.eventsOptions}
          
        />
   
        </Paper>
       </Grid>

       <Grid className={classes.dashboardMapPaper} item xs={12}>
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
       </Grid>
   </Grid>
    </Box>
  )
}

export default Dashboard