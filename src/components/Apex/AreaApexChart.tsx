import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";
import { formatDatesForGraphicFooter } from "src/utils/dateChartsHelper";

const AreaApexChart = ({ data }) => {

  const xData: string[] = data.map(d => formatDatesForGraphicFooter(d))
  const yData: number[] = data.map(d => d.pnl)
  const chartOptions: ApexOptions = {
    chart: {
      id: "basic-bar",
      background: "transparent",
      foreColor: '#1FDE6B', //this is the color for the axis labels
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: true,
        },
      },
    },
    xaxis: {
      categories: xData,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    theme: {
      mode: "dark"
    },
    markers: {
      size: 5,
      fillOpacity: 0.8,
      strokeColors: '#1FDE6B',
      strokeWidth: 2,
    },
    grid: {
      show: false,
    },
    stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: ['#1FDE6B', "FFFFF", '#1FDE6B', "FFFFF", '#1FDE6B', "FFFFF", '#1FDE6B', "FFFFF",],
      width: 2,
      dashArray: 0,
    },
    fill: {
      colors: ['#1FDE6B'],
      opacity:0.6,
    },
    dataLabels: {
      enabled: false // Remove the labels in each marker when chart type is area
    },
    tooltip: {
      enabled: true,
      followCursor: false,
      intersect: false,
      custom: undefined,
      fillSeriesColor: false,
      style: {
        fontSize: '13px',
        fontFamily: undefined
      },
      x: {
          show: true, // show x labels 
          format: 'dd MMM',
          formatter: undefined,
      },
      y: {
          formatter: undefined,
          title: {
              formatter: (seriesName) => seriesName,
          },
      },
      marker: { // Show the green point in the tooltip
          show: true,
      },
  }
  }

  const series = [
    {
      name: "Pnl",
      data: yData
    }
  ]


  return (
    <div className="app">
      <Chart
        options={chartOptions}
        series={series}
        type="area"
        width="800"
        height="500"
      />
    </div>
  );

}

export default AreaApexChart