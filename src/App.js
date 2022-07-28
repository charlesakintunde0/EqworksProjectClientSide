import './App.css';
import { BrowserRouter }from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';

import { fetchEventsHourly, fetchEventsDaily,fetchStatsHourly,fetchStatsDaily} from './actions/index'
import Router from './components/Router';


function App() {
  const dispatch = useDispatch()

  dispatch(fetchEventsHourly())
  dispatch(fetchEventsDaily())
  dispatch(fetchStatsHourly())
  dispatch(fetchStatsDaily())
  return (
       <BrowserRouter>
        <div  className="App">
        <Router/>
        </div>
       </BrowserRouter>
  );
}

export default App;
