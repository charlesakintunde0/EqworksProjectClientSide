import moment from 'moment'




export const Chart = (statsDaily,statsHourly, eventsDaily ,eventsHourly, metrics,metricsTime,selectedDate) => {
 
  const globalStatsData = () => {
    if (metricsTime === 'Hour') {
      return statsHourly.filter(data => moment(data.date).format("MMM Do YY") === selectedDate )
     }
     else{
      return statsDaily.map(data => data)
    }
  }

  const globalEventsData = () => {
    if (metricsTime === 'Hour') {
      return eventsHourly.filter(data => moment(data.date).format("MMM Do YY") === selectedDate )
     }
     else{
      return eventsDaily.map(data => data)
    }
  }

  const eventsXaxis = () => {
    if (metricsTime === 'Hour'){
    return  globalEventsData().map(data => data.hour)
    }else{
    return  globalEventsData().map(data => moment(data.date).format('ll'))
    }
  }

  const statsXaxis = () => {
    if (metricsTime === 'Hour'){
    return  globalStatsData().map(data => data.hour)
    }else{
    return  globalStatsData().map(data => moment(data.date).format('ll'))
    }
  }




const xaxisType = () => {
  if (metricsTime === 'Day'){
    return 'datetime'
  }else{
    return 'null'
  }
}



  const RevenueVsClicksChartData = {
    series: [{
      name: 'Revenue in dollars',
      type: 'area',
      data: globalStatsData().map(data => Math.round(data.revenue)),
    }, {
      name: 'Clicks',
      type: 'area',
      data: globalStatsData().map(data => Math.round(data.clicks))
    }],
    options: {
      chart: {
        height: 350,
        type: 'area',
        stacked: true,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      xaxis: {
        type: xaxisType(),
        categories: statsXaxis()
      },
      tooltip: {
        intersect: false,
        labels: {
          format: 'dd/MM/yy HH:mm'
      },
        y: {
          formatter: (val) => {
            if (typeof val !== 'undefined') {
              return `${val < 1000 ? val: `${Math.round((val/1000) * 10)/10}K`} `;
            }
            return val;
          },
        },
      },
    },
  
  
  };



  const EventsVsClicksChartData = {
    series: [{
      name: 'Impressions(In thousands)',
      type: 'area',
      data: globalStatsData().map(data =>data.impressions/1000),
    }, {
      name: 'Clicks',
      type: 'area',
      data: globalStatsData().map(data => Math.round(data.clicks))
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: true,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      xaxis: {
        type: xaxisType(),
        categories: statsXaxis()
      },
      tooltip: {
        intersect: false,
        labels: {
          format: 'dd/MM/yy HH:mm'
      },
        y: {
          formatter: (val) => {
            if (typeof val !== 'undefined') {
              return `${`${Math.round((val*10))/10}`} `;
            }
            return val;
          },
        },
      },
    },
  
  
  };


  const EventsChartData = {
    series: [
      {
       name: 'stats',
       type: 'bar',
       data: globalEventsData().map(data => data.events)
     }
   ],
     options: {
       chart: {
         height: 350,
         type: 'bar',
       },
       dataLabels: {
         enabled: false
       },
       xaxis: {
        //  type: 'datetime',
         categories: eventsXaxis()
       },
       tooltip: {
         intersect: false,
         labels: {
           format: 'dd/MM/yy HH:mm'
       },
         y: {
           formatter: (val) => {
             if (typeof val !== 'undefined') {
               return `${val}  Events`;
             }
             return val;
           },
         },
       },
     },
  }

 

  const ClicksChartData = {
 series: [
     {
      name: 'stats',
      type: 'bar',
      data: globalStatsData().map(data => Math.round(data.clicks))
    }
  ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: xaxisType(),
        categories: statsXaxis()
      },
      tooltip: {
        intersect: false,
        labels: {
          format: 'dd/MM/yy HH:mm'
      },
        y: {
          formatter: (val) => {
            if (typeof val !== 'undefined') {
              return `${val} clicks`;
            }
            return val;
          },
        },
      },
    },
  
  
  };

  const ImpressionsChartData = {
    series: [
      {
       name: 'stats',
       type: 'line',
       data: globalStatsData().map(data => Math.round(data.impressions))
     }
   ],
     options: {
       chart: {
         height: 350,
         type: 'line',
         stacked: true,
       },
       dataLabels: {
         enabled: false
       },
       stroke: {
         curve: 'straight'
       },
       xaxis: {
         type: 'datetime',
         categories: statsXaxis()
       },
       tooltip: {
         intersect: false,
         labels: {
           format: 'dd/MM/yy HH:mm'
       },
         y: {
           formatter: (val) => {
             if (typeof val !== 'undefined') {
               return `${val < 1000000? `${val/10000}K`: `${Math.round(val/1000000 * 1000)/1000}M`} Impressions`;
             }
             return val;
           },
         },
       },
     },


};


  const RevenueChartData = {
    series: [{
      name: 'Revenue in dollars',
      type: 'line',
      data: globalStatsData().map(data => Math.round(data.revenue))
    }, 
  ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        stacked: true,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      xaxis: {
        type: 'datetime',
        categories: statsXaxis()
      },
      tooltip: {
        intersect: false,
        labels: {
          format: 'dd/MM/yy HH:mm'
      },
        y: {
          formatter: (val) => {
            if (typeof val !== 'undefined') {
              return `${val/1000}k `
            }
            return val;
          },
        },
      },
    },
  
  
  };


  if (metrics === 'Clicks vs Revenue') {
    return RevenueVsClicksChartData
  } else if (metrics === 'Revenue') {
    return RevenueChartData
  }else if (metrics === 'Clicks'){
    return ClicksChartData
  }
  else if (metrics === 'Impressions'){
    return ImpressionsChartData
  }else if (metrics === 'Events'){
    return EventsChartData
  }else if (metrics === 'Impressions Vs Clicks'){
    return EventsChartData
  }
  else if (metrics === 'Events Vs Clicks'){
    return EventsVsClicksChartData
  }
}

