

export const stockValues = {
  name: 'Ticker',
  value: 'Close',
  date: 'Date',
  dataNames: ['AAPL', 'MSFT', 'NVDA', 'GOOGL', 'GOOG', 'AMZN', '2222.SR', 'META', 'BRK-B', 'TSM', 'LLY'],
  start: new Date('2015-01-01'),
  end: new Date('2024-08-31')
}

export const gdpValues = {
  name: 'ticker',
  xValue: 'gdp_cap',
  yValue: 'life_exp',
  rValue: 'population',
  type: 'continent',
  year: 'year',
  groupKey: 'year',
  dataNames: ['Africa', 'Asia', 'Americas', 'Europe'],
  start: 1952,
  end: 2007,
  duration: 1000,
  yearStep: 5
}

export const gamingValues = {
  name: 'name',
  yValue: 'hours_played',
  xValue: 'year',
  rValue: 'rating',
  type: 'genre',
  groupKey: 'year',
  dataNames: ['Racing', 'Puzzle', 'Adventure', 'Fighter', 'Shooter'],
  start: new Date('1993'),
  end: new Date('2026'),
  duration: 5000,
  yearStep: 5,
}

export const energyValues = {
  name: 'Country',
  groupKey: 'Year',
  className: 'energy',
  rValue: 'Total Energy Consumption (TWh)',
  xValue: 'Per Capita Energy Use (kWh)',
  yValue: 'Carbon Emissions (Million Tons)',
  date: 'Year',
  type: 'Country',
  start: 2000,
  end: 2024,
  duration: 5000,
  yearStep: 1,
  dataNames: [
    'Canada',
    'USA',
    'Germany',
    'Russia',
    'Australia',
    'Brazil',
    'China',
    'Japan',
    'India',
    'UK',
  ],
}

export const mortgageValues = {
  date: 'date',
  groupKey: 'Year',
  dataNames: ['Fixed_Rate_2y_75', 'Fixed_Rate_2y_95', 'Fixed_Rate_3y_75', 'bank_Rate', 'variable_Rate'],
  start: new Date('1999/01/02'),
  end: new Date('2023/10/02'),
  yValueKey: 'life_exp',
  xValueKey: 'gdp_cap',
  minYear: 1999,
  maxYear: 2023,
  duration: 1000,
  yearStep: 1
}

export const dataGrids = [
  {
    xClass: 'x-grid',
    yClass: 'y-grid'
  },
  {
    xClass: 'x-grid',
    yClass: 'y-grid'
  },
  {
    xClass: 'x-grid',
    yClass: 'y-grid'
  },
  {
    xClass: 'x-grid',
    yClass: 'y-grid'
  },
  {
    xClass: 'x-grid',
    yClass: 'y-grid'
  },
  {
    xClass: 'x-grid',
    yClass: 'y-grid'
  },
  {
    xClass: 'x-grid',
    yClass: 'y-grid'
  },
  {
    xClass: 'x-grid',
    yClass: 'y-grid'
  },
  {
    xClass: 'x-grid',
    yClass: 'y-grid'
  },
]