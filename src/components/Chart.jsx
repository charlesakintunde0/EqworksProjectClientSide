import { ApexOptions } from 'apexcharts';
import moment from 'moment'




export const Chart = (statsDaily,statsHourly, eventsDaily ,eventsHourly, metrics,metricsTime,selectedDate) => {
  console.log(metricsTime)
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
    return  globalEventsData().map(data => data.date)
    }
  }

  const statsXaxis = () => {
    if (metricsTime === 'Hour'){
    return  globalStatsData().map(data => data.hour)
    }else{
    return  globalStatsData().map(data => data.date)
    }
  }

console.log(statsXaxis())


const xaxisType = () => {
  if (metricsTime === 'Day'){
    return 'datetime'
  }else{
    return 'null'
  }
}
console.log(xaxisType())

//   const data = globalStatsData()

console.log(globalStatsData().map(data => data.hour))
  // const ClicksData = () => {
  //   if (metrics === 'Hour') {
  //     return statsHourly.map(data => data.clicks)
  //   }else{
  //     return statsDaily.map(data => data.revenue)
  //   }
  // }

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
        type: 'line',
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
              return `${val < 1000 ? val: `${Math.round((val/1000) * 10)/10}K`} `;
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
        curve: 'smooth'
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
}

export const RevenueChart = (activities_data) => {
  const chartData = {
  
    series: [{
      name: "Revenue",
      data: activities_data?.map(activities_data => Math.round(activities_data.revenue))
  }],
  options: {

    y: {
      formatter: (val) => {
        if (typeof val !== 'undefined') {
          return `$${Math.abs(val)} Dollars in revenue`;
        }
        return val;
      },
    },
    
    chart: {
      height: 350,
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Revenue Per Day',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      type: 'datetime',
      categories: activities_data?.map(activity_data => activity_data.date),
    },
    y: {
      formatter: (val) => {
        if (typeof val !== 'undefined') {
          return `$${Math.abs(val)} Dollars in revenue`;
        }
        return val;
      },
    },
  },

  

};
  

  return chartData
}

export const RevenueVsImpressionsChart = (statsData) => {
  
  const chartData = {
    series: [{
      name: 'Revenue in dollars',
      type: 'line',
      data: statsData?.map(data => Math.round(data?.revenue))
    }, {
      name: 'Clicks',
      type: 'line',
      data: statsData?.map(data => Math.round(data?.clicks))
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
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: statsData?.map(data => data?.date)
      },
      // tooltip: {
      //   x: {
      //     format: 'dd/MM/yy HH:mm'
      //   },
      // },
    },
  
  
  };

  return chartData
  }



export const DonutChart = (activities_data) => {
  const chartData = { 
    height: 360,
    options: {
      stroke: { width: 1 },
      labels: activities_data?.map(data => moment(data.date).format('ll')),
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '75%',
            labels: {
              show: true,
              name: {},
              value: {
                offsetY: 8,
              },
              total: {
                // show: true,
                // showAlways: true,
                // label: 'Total Events',
                // fontSize: '16px',
                // color: '#2787AB'
              },
            },
          },
        },
      },
      tooltip: {
        shared: true,
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
    } ,
    series: activities_data?.map(data => parseInt(data?.clicks))
           
     
  };
  return chartData;
}

export const SplineChart = (activities_data) => {
    const chartData = {
        series : [
            {
            name: 'Number of hours',
            // type: 'column',
            data: activities_data?.map((activity_data) => activity_data.hour)
        },
    {
        name: 'Events',
        // type: 'area',
        data: activities_data?.map((activity_data) => activity_data.events)
    }],
    options: {
        chart: {
            type: 'bar',
            height:50,
           
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        fill: {
            type:'solid',
            opacity: [0.35, 1],
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
        xaxis: {
            type: 'datetime',
            categories: activities_data?.map((activity_data) => activity_data.date)
        },
        yaxis: [{
            title: {
              text: 'Hour',
            },
          
          }, {
            opposite: true,
            title: {
              text: 'No of Events'
            }
          }],
      
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },
    }

    return chartData;
}