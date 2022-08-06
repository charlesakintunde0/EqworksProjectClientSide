import axios from 'axios'
const url = 'http://localhost:5555'

export const fetchEventsHourly = () => axios.get(`${url}/events/hourly`)
export const fetchEventsDaily = () => axios.get(`${url}/events/daily`)
export const fetchStatsHourly = () => axios.get(`${url}/stats/hourly`)
export const fetchStatsDaily = () => axios.get(`${url}/stats/daily`)
export const fetchPoi = () => axios.get(`${url}/poi`)
export const fetchStatsPoi = () => axios.get(`${url}/stats/poi`)
export const fetchEventsPoi = () => axios.get(`${url}/events/poi`)
