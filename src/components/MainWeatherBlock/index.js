'use client'
import * as React from "react"

import { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function MainWeatherBlock({ weather }) {

  const [currentDate, setCurrentDate] = useState("")

  const getCurrentDate = () => {
    const date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let formattedDate = `${year}-${month}-${day}`
    setCurrentDate(formattedDate)
  }

  useEffect(() => {
    getCurrentDate()
  }, [])

  return (
    <Card className="flex flex-col justify-center items-center w-[400px] h-[400px]">
  <CardHeader className="flex flex-col justify-center items-center">
    <CardTitle className="text-center">
      {((weather.main.temp) - 273.15).toFixed(1)}°C
    </CardTitle>
    <CardDescription className="text-center">{currentDate}</CardDescription>
  </CardHeader>
  <CardContent className="text-center">
    siemaneczko mordeczko
  </CardContent>
</Card>

  )
}
