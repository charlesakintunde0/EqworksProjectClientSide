import React from 'react'
import { useSelector} from 'react-redux';
import MUIDataTable from "mui-datatables";
import {
    Box,
    Grid,
    createStyles,
  } from '@mui/material';
  import { makeStyles } from '@mui/styles';
 

  import * as tableData from '../TableData'


  const DatatableTabTabStyles = makeStyles(() =>
  createStyles({
    tablePaper: {
      marginBottom: 40
    },
    dashboardMapPaper: {
      marginTop: 40
    
    },
    dashboardMapGrid : {
      padding: 10
    },
    mapBox: {

    },
    datatableGridItem: {
        marginBottom: 40
    }
    // dashboardMapBox: {
    //   position: "absolute"
    // }
  })
);




const DataTables = () => {
    const chartData = useSelector(state => state)
    const PoiData = chartData?.poi
    const EventsData = chartData?.events_per_day
    const StatsData = chartData?.stats_per_day
    const classes = DatatableTabTabStyles()
  return (
      <Grid spacing={3}>
         <Grid  item xs= {12}>
      <Box className={classes.datatableGridItem}>
      <MUIDataTable
          title={"POI TABLE"}
          data={PoiData}
          columns={tableData.PoiColumns}
          options={tableData.PoiOptions}
          
        />
      </Box>
    </Grid>
   <Grid className={classes.datatableGridItem} item xs={12}>
   <Box className={classes.datatableGridItem}>
    <MUIDataTable
          title={"EVENTS TABLE"}
          data={EventsData}
          columns={tableData.EventColumns}
          options={tableData.eventsOptions}
          
        />
        </Box>
   </Grid>
  
       <Grid className={classes.datatableGridItem} item xs={12}>
       <Box className={classes.datatableGridItem}>
        <MUIDataTable
          title={"STATS TABLE"}
          data={StatsData}
          columns={tableData.statsColumn}
          options={tableData.StatsOptions}
          
        />
        </Box>
       </Grid>
      </Grid>
  )
}

export default DataTables