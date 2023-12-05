import { PNLData } from "./types"

export const formatDatesForGraphicFooter = (pnlData: PNLData): string => {

  const newDate = new Date(pnlData.date)
  const date = ({
    year: newDate.getUTCFullYear(),
    month: (newDate.getUTCMonth() + 1) < 10 ? "0" + (newDate.getUTCMonth() + 1) : (newDate.getUTCMonth() + 1),
    day: (newDate.getUTCDate()) < 10 ? "0" + (newDate.getUTCDate()) : (newDate.getUTCDate()),
    hour: newDate.getUTCHours() < 10 ? "0" + newDate.getUTCHours() : newDate.getUTCHours(),
    min: newDate.getUTCMinutes() < 10 ? "0" + newDate.getUTCMinutes() : newDate.getUTCMinutes(),
  })
  return `${date.year}-${date.month}-${date.day} ${date.hour}:${date.min}`
}

// RANDOM CHART DATA
const generateRandomPnl = () => {
  return (Math.random() * (5 - (-5)) - 5).toFixed(2);
};

export const generateDataArray = (): PNLData[] => {
  const startDate = new Date('2023-01-01T09:30:00');
  const dataArray = [];

  for (let i = 0; i < 100; i++) {
    const currentDate = new Date(startDate.getTime() + i * 5 * 60 * 1000);
    const formattedDate = currentDate.toISOString();
    const randomPnl = generateRandomPnl();

    dataArray.push({ date: formattedDate, pnl: parseFloat(randomPnl) });
  }

  return dataArray;
};