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

export function ChildrenWeatherBlock({ weather }) {

  const [currentDate, setCurrentDate] = useState("")

  return (
    <Card className="flex flex-col justify-center items-center w-[200px] h-[200px]">
  <CardHeader className="flex flex-col justify-center items-center">
    <CardTitle className="text-center">
      {((weather.main.temp) - 273.15).toFixed(1)}°C
    </CardTitle>
    <CardDescription className="text-center">{(weather.dt_txt).slice(0, 10)}</CardDescription>
  </CardHeader>
  <CardContent className="text-center">
    siemaneczko mordeczko
  </CardContent>
</Card>

  )
}
