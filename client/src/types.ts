export type FormDataProps = {
  name: string,
  email: string,
  message: string
};

export type GamingTypes = {
  name: string
  rating: number
  price: number
  genre: string
  year: string
  hours_played: number
}

export type GamingValueType = {
  name: string,
  yValue: string,
  xValue: string,
  rValue: string,
  type: string,
  groupKey: string
  dataNames: string[],
  start: Date,
  end: Date,
  duration: number,
  yearStep: number,
}
export type GDPValueTypes = {
  name: string,
  xValue: string,
  yValue: string,
  rValue: string,
  type: string,
  year: string,
  groupKey: string,
  dataNames: string[],
  start: number,
  end: number,
  duration: number,
  yearStep: number
}
export type GDPTypes = {
  country: string
  year: number
  population: number
  continent: string
  gdp_cap: number
  life_exp: number
}

export type StockDataTypes = {
  Date: string
  Ticker: string
  Close: string
  Open: string
  High: string
  Low: string
  Volume: number
}

export type StockValueTypes = {
  name: string,
  value: keyof any,
  date: string,
  dataNames: string[],
  start: Date,
  end: Date
}

export type RaceChartTypes = {
  grids: { xClass: string, yClass: string }[],
  dataByYear: { year: GDPTypes[] },
  currentYear: number,
  width: number,
  height: number,
  chartValues: GDPValueTypes,
  colourScale: any,
  margin: { top: number, right: number, bottom: number, left: number },
}

export type GamingCustomValues = {
  grids: { xClass: string, yClass: string }[],
  width: number,
  height: number,
  chartValues: GamingValueType,
  colourScale: any,
  margin: { top: number, right: number, bottom: number, left: number },
  condition?: any
}

export type StockCustomValue = {
  grids: { xClass: string, yClass: string }[],
  width: number,
  height: number,
  chartValues: StockValueTypes,
  colourScale: any,
  margin: { top: number, right: number, bottom: number, left: number },
  condition?: any
}
