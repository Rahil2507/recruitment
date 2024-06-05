"use client"

import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";


export const HalfDonut = ({data}: {data: [string, number][]}) => {
  const baseOptions = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Applications<br>recieved from<br>different fields.',
        align: 'center',
        verticalAlign: 'middle',
        y: 60,
        style: {
            fontSize: '0.8em'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Jobs share',
        innerSize: '50%',
        data
    }]
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