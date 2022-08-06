import React, {useState} from 'react'
import {
  Box,
  createStyles,
  Paper,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import PropTypes from 'prop-types';


import ChartTab from './Tabs/ChartTab';
import MapTab from './Tabs/MapTab';
import DataTables from './Tabs/DataTables';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabsStyles = makeStyles(() =>
  createStyles({
    tabsContainer:{
        position: 'absolute',
        // display:'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        top: '80px',
        width: '100%'
    },
  })
);
const TabBar = () => {
    const classes = TabsStyles()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
     <Box className={classes.tabsContainer}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Maps" {...a11yProps(0)} />
          <Tab label="Charts" {...a11yProps(1)} />
          <Tab label="Datatables" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MapTab/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ChartTab/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataTables/>
      </TabPanel>
     </Box>
  )
}

export default TabBar