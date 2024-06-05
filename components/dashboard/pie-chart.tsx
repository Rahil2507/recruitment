"use client"

import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";


export const PieChart = ({data}: {data: {name: string, y: number}[]}) => {
  const baseOptions = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Jobs posted to different fields.',
      verticalAlign: 'bottom',
      // y: 60,
      style: {
          fontSize: '0.8em'
      }
  },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 5
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '0.8em',
                    textOutline: 'none',
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data
        }
    ]
  }
  
  return (
    <HighchartsReact
    containerProps={{ style: { width: "450px" } }}
      highcharts={Highcharts}
      options={{
        ...baseOptions,
        // title: "Title",
        // series: [{ ...baseOptions.series[0], data: map.data }],
      }}
      constructorType={"mapChart"}
    />
  );
}