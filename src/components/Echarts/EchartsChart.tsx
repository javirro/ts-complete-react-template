import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { PNLData } from 'src/utils/types';

const EchartsChart = ({ data }: { data: PNLData[] }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chartRef.current) {
      // Initialize ECharts instance
      const myChart = echarts.init(chartRef.current, 'dark');

      // ECharts options for the area chart
      const options: echarts.EChartsOption = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        title: {
          left: 'center',
          text: 'Large Scale Area Chart',
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.map(d => d.date)
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          position: 'right',
          name: "PnL",
          nameLocation: "middle"
        },
        dataZoom: [
          {
            type: 'inside',
            start: data.length-30,
            end: data.length
          },
          {
            start: data.length-30,
            end: data.length
          }
        ],
        series: [
          {
            name: 'Pnl',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'green' // color at 0%
                }, {
                    offset: 1, color: 'red' // color at 100%
                }],
                global: false // default is false
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'green' // color at 0%
                }, {
                    offset: 1, color: 'red' // color at 100%
                }],
                global: false // default is false
              }
            },
            data: data.map(d => d.pnl),
          },
        ],
      };

      // Set the options and render the chart
      myChart.setOption(options);

      // Clean up the chart when the component is unmounted
      return () => {
        myChart.dispose();
      };
    }
  }, [data]);
  return (<section className='echart-section'>
    <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
  </section>)
}

export default EchartsChart