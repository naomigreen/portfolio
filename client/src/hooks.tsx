import emailjs from '@emailjs/browser'
import { useState, useEffect } from 'react'
import { scaleOrdinal } from 'd3'
import { FormDataProps } from './components/Form'
import { groupByKey } from './utils'
import { dataGrids } from './chartData'
import { stockCondition } from './utils'
import { chartThemes } from './components/ThemeController/themeData'

export const usePostForm = () => {
  const [postState, setPostState] = useState({
    success: false,
    error: false,
    loading: false
  })

  const PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY as string;
  const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID as string;

  const postForm = async ({ name, email, message }: FormDataProps) => {
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    setPostState({ loading: true, success: false, error: false })

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY }).then(
      (response) => {
        setPostState({ ...postState, loading: false, success: true })
        console.log('SUCCESS!', response.status, response.text);
      }
    ).catch((err) => {
      setPostState({ ...postState, loading: false, error: true })
      console.log('FAILED...', err);
    },)
  }
  return { postState, postForm }
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchData()
  }, [url]
  );

  return { data, loading };
};

export const useYearLoop = (min: number, max: number, duration: number, yearStep: number) => {
  const [year, setYear] = useState(min)
  let interval: any

  useEffect(() => {
    interval = setInterval(() => {
      if (year < max) {
        setYear(year + yearStep);
      } else {
        setYear(min);
      }
    }, duration)
    return () => {
      clearInterval(interval)
    }
  });

  return year
}

export const useChartData = (chartValues: any, theme: keyof typeof chartThemes) => {
  const colours = scaleOrdinal().domain(chartValues.dataNames).range(chartThemes[theme])
  return {
    grids: dataGrids,
    width: 900,
    height: 500,
    chartValues,
    colourScale: colours,
    margin: { top: 40, right: 60, bottom: 60, left: 60 },
    condition: stockCondition
  }
}

export const useRaceChartData = (data: any[], chartValues: any, theme: keyof typeof chartThemes) => {
  const dataByYear = groupByKey(data, chartValues.groupKey)
  const { start, end, duration, yearStep } = chartValues
  const year = useYearLoop(start, end, duration, yearStep)
  const colours = scaleOrdinal().domain(chartValues.dataNames).range(chartThemes[theme])

  return {
    grids: dataGrids,
    dataByYear,
    currentYear: year,
    width: 900,
    height: 500,
    chartValues,
    colourScale: colours,
    margin: { top: 40, right: 50, bottom: 60, left: 60 },
  }
}

export const useMinMax = (data: any, value: any) => {
  const values = data.flat().map((d: any) => (parseFloat(d[value])))
  const max = Math.max(...values)
  const min = Math.min(...values)
  return { min, max }
}