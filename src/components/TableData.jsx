import moment from 'moment'

export const PoiOptions = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    tableHeight: "400px",
    searchPlaceholder: "Search POI NAME"
  }

export const PoiColumns = [
    
      {
        name: "poi_id",
        label: "POI ID",
       
    },
    { name: "name", label: "Name", options: { filterOptions: { fullWidth: true } } },
    {
      name: "lat",
      label: "LAT",},
     {
      name: "lon",
      label: "LON",
     },
  ];

  export const eventsOptions = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    tableHeight: "400px",
    searchPlaceholder: "Search by events and No of Events"
  }

  

 export const EventColumns = [
    
  {
    name: "date",
    label: "Date",
    options: {
      display: true,
      customBodyRender: (date) => {
        return moment(date).format('ll');
      },
    },
   
},
{ name: "events", label: "No of Events", },

];




export const StatsOptions = {
  search: true,
  download: true,
  print: true,
  viewColumns: true,
  filter: true,
  filterType: "dropdown",
  tableHeight: "400px",
  searchPlaceholder: "Search by Stats by day or Revenue"
}



export const statsColumn = [
  
{
  name: "date",
  label: "Date",
  options: {
    display: true,
    customBodyRender: (date) => {
      return moment(date).format('ll');
    },
  },
 
},
{ name: "impressions", label: "Impressions",
options: {
  display: true,
  customBodyRender: (value) => {
    if (value > 1000000) {
      return `${Math.round(value/1000000)}M`
    }else{
      return `${Math.round(value/1000)}K`
    }
  },
}, },
{ name: "clicks", label: "Clicks",
options: {
  display: true,
  customBodyRender: (value) => {
    if (value > 1000) {
      return `${Math.round(value/1000)}K`
    }
  },
}, },
{ name: "revenue", label: "Revenue",
options: {
  display: true,
  customBodyRender: (value) => {
    if (value > 1000) {
      return `${Math.round(value/1000)}K`
    }
  },
}, },

];