
import EchartsChart from 'src/components/Echarts/EchartsChart'
import '../App.css'
import {  generateDataArray } from 'src/utils/dateChartsHelper';
import { PNLData } from 'src/utils/types';
const Echarts = () => {

  const generatedData: PNLData[] = generateDataArray();

  // const data = [
  //     { date: '2023-01-01T09:30:00', pnl: 2 },
  //     { date: '2023-01-02T09:31:15', pnl: 5 },
  //     { date: '2023-01-03T09:32:30', pnl: 6 },
  //     { date: '2023-01-04T09:33:45', pnl: 2 },
  //     { date: '2023-01-05T09:35:00', pnl: 3 },
  //     { date: '2023-01-06T09:30:00', pnl: -0.2 },
  //     { date: '2023-01-07T09:31:15', pnl: -0.4 },
  //     { date: '2023-01-08T09:32:30', pnl: 1 },
  //     { date: '2023-01-09T09:33:45', pnl: 2 },
  //     { date: '2023-01-10T09:35:00', pnl: 7 },
  //     // Add more data points as needed
  // ]
  return (
    <div className="App">
      <EchartsChart data={generatedData} />
    </div>
  )
}

export default Echarts