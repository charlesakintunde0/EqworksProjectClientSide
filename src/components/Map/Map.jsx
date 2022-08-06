import React from 'react'
import { MapContainer, TileLayer,Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import moment from 'moment'
import './Map.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import MapToolTip from './MapToolTip';




const Map = ({data, selectedMapMetricsData}) => {
  const globalEventsData = () => {
   return data.events_poi.filter(eventsData => moment(eventsData.date).format("ll") === selectedMapMetricsData.selectedMapDate)
  }
    
 const globalStatsData = () => {
  return data.stats_poi.filter(statsData => moment(statsData.date).format("ll") === selectedMapMetricsData.selectedMapDate)
 }




  return (

    <MapContainer center={[43.6708, -79.3899]} zoom={2} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        {
          selectedMapMetricsData.selectedMapMetrics === 'Events' ? 
            globalEventsData().map(eventsData => (
              <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} position={[eventsData.lat,eventsData.lon]}>
                  <MapToolTip eventsData = {eventsData}  events/>
              </Marker>
            ))
           : 
           globalStatsData().map(statsData => (
            <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} position={[statsData.lat,statsData.lon]}>
              <MapToolTip statsData={statsData} stats/>
            </Marker>
          ))
        }
  </MapContainer>
  )
}

export default Map