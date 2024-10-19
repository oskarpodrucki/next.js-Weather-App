"use client";
import * as React from "react";

import { useState, useEffect } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ThermometerSun } from 'lucide-react';
import { ThermometerSnowflake } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

export function ChildrenWeatherBlock({ weather }) {
	const [currentDate, setCurrentDate] = useState("");

	return (
		<Card className='flex flex-col justify-center items-center w-[200px] h-[200px]'>
			<CardHeader className='flex flex-col justify-center items-center mt-6'>
				<CardTitle className='text-center'>
					{(weather.main.temp - 273.15).toFixed(1)}°C
				</CardTitle>
				<CardDescription className='text-center'>
					{weather.dt_txt.slice(0, 10)}
				</CardDescription>
			</CardHeader>
			<Separator orientation='horizontal' />
			<CardContent className='flex flex-row justify-evenly items-center text-center mt-1'>
				<div className='flex flex-col justify-center items-center w-[90px] h-[90px]'>
					<ThermometerSun/>
					{(weather.main.temp_max - 273.15).toFixed(1)}°C
				</div>
				<Separator orientation='vertical' />
				<div className='flex flex-col justify-center items-center w-[90px] h-[90px]'>
					<ThermometerSnowflake/>
					{(weather.main.temp_min - 273.15).toFixed(1)}°C
				</div>
			</CardContent>
		</Card>
	);
}
