import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

const ApexChartZoomable = ({ data }) => {
  console.log(data)

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


  const chartOptions: ApexOptions = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
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
      name: "series-1",
      data: [30, -40, 45, 50, 49, 60, 70, 91]
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