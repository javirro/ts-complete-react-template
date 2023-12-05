import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { PNLData } from 'src/utils/types';

const EchartsChart = ({ data }: { data: PNLData[] }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chartRef.current) {
      // Initialize ECharts instance
      const myChart = echarts.init(chartRef.current);

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
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10
          }
        ],
        series: [
          {
            name: 'Pnl',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }
              ])
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