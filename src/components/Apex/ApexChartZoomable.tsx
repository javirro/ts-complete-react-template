import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";
import { formatDatesForGraphicFooter } from "src/utils/dateChartsHelper";

const ApexChartZoomable = ({ data }) => {

  // const markers: any = {
  //     size: 2,
  //     colors: undefined,
  //     strokeColors: '#00000',
  //     strokeWidth: 2,
  //     strokeOpacity: 0.9,
  //     strokeDashArray: 0,
  //     fillOpacity: 1,
  //     shape: "circle",
  //     radius: 2,
  // }

  const xData: string[] = data.map(d => formatDatesForGraphicFooter(d))
  const yData: number[] = data.map(d => d.pnl)
  const chartOptions: ApexOptions = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: xData
    },
    theme: {
      mode: "dark"
    },

    markers: {
      size: 5,
      fillOpacity: 0.8,
      strokeColors: '#1FDE6B',
      strokeWidth: 2,
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
        type="line"
        width="800"
        height="500"
      />
    </div>
  );

}

export default ApexChartZoomable