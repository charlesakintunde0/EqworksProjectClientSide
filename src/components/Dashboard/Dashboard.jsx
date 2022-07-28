import React, {useState} from 'react'
import { useSelector} from 'react-redux';
import ReactApexChart from 'react-apexcharts';
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


import { SplineChart,DonutChart, RevenueChart, RevenueVsImpressionsChart, Chart } from '../Chart';


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
    }
  })
);


const Dashboard = () => {
   const [metricsTime, setMetricTime] = useState('Hour')
   const [graphMetrics, setGraphMetrics] = useState('Clicks vs Revenue')
   const [selectedDate, setSelectedDate] = useState('Jan 1st 17')
    const chartData = useSelector(state => state)
    console.log(chartData)
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
    {/* <Grid item lg={4} xs={12}>
    <Paper>
      <ReactApexChart 
       {...DonutChart(data.stats_per_day)} type="pie" />
        </Paper>
    </Grid>
    <Grid item lg={4} xs={12}>
    <Paper>
      <ReactApexChart 
       {...RevenueChart(data.stats_per_day)} type='line' />
        </Paper>
    </Grid> */}
    </Grid>
    </Box>
  )
}

export default Dashboard