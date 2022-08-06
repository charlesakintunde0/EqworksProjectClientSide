import './App.css';
import { BrowserRouter }from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';

import { fetchEventsHourly, fetchEventsDaily,fetchStatsHourly,fetchStatsDaily, fetchPoi,fetchStatsPoi,fetchEventsPoi} from './actions/index'
import Router from './components/Router';
import AppBarHeader from './components/AppBarHeader';
import SideBar from './components/SideBar';
import TabBar from './components/TabBar';


import { ThemeProvider, createTheme } from '@mui/material/styles'; 

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Josefin Sans',
      textTransform: 'none',
      fontSize: 16,
    },
    primary: {
      main:'white',
    }
  },
});

function App() {
  const dispatch = useDispatch()

  dispatch(fetchEventsHourly())
  dispatch(fetchEventsDaily())
  dispatch(fetchStatsHourly())
  dispatch(fetchStatsDaily())
  dispatch(fetchPoi())
  dispatch(fetchEventsPoi())
  dispatch(fetchStatsPoi())
  return (
      <ThemeProvider theme ={theme}>
         <BrowserRouter>

         <AppBarHeader/>
         {/* <SideBar/> */}
        <div  className="App">
          <TabBar/>
        </div>
       </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
