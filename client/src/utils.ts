import { createContext } from 'react';

export const MAX_MOBILE = '767px'
export const MIN_TABLET = '768px'
export const MAX_TABLET = '1024px'
export const MIN_DESKTOP = '1025px'

export const DataContext = createContext({
  theme: '',
  setTheme: (value: any) => value,
});

export const chartApis = [
  {
    url: '/api/data/stock-prices',
    name: 'stockData'
  },
  {
    url: '/api/data/energy',
    name: 'energyData'
  },
  {
    url: '/api/data/mortgage',
    name: 'mortgageData'
  },
  {
    url: '/api/data/fuel-prices',
    name: 'fuelData'
  },
]
export const emailRegex = /^\S+@\S+\.\S+$/
export const nameRegex = /^[a-z ,.'-]+$/i

export const groupByKey = (data: any, key: string) => {
  return data.reduce((acc: any, cur: any) => {
    if (!acc[cur[key]]) acc[cur[key]] = [];
    acc[cur[key]].push(cur);
    return acc;
  }, []);
}

export const getTopResults = (data: any, key: any) => {
  return data.sort((a: any, b: any) => {
    return parseInt(b[key]) - parseInt(a[key]);
  }).slice(0, 20);
}

export const stockCondition = (d: any, key: any) => {
  return (['AAPL', 'GOOGL', 'BA', 'SHEL'].includes(d[0][key]) ? -16 : 0) + (['AMZN'].includes(d[0][key]) ? - 24 : 0) + (['TSM', 'NVDA'].includes(d[0][key]) ? + 20 : 0)
}
