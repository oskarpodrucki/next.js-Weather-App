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
import { Separator } from "@/components/ui/separator";
import { Building2 } from "lucide-react";
import { Gauge } from "lucide-react";
import { Droplets } from "lucide-react";
import { Wind } from "lucide-react";

export function MainWeatherBlock({ weather }) {
	const [currentDate, setCurrentDate] = useState("");

	const getCurrentDate = () => {
		const date = new Date();

		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();

		let formattedDate = `${year}-${month}-${day}`;
		setCurrentDate(formattedDate);
	};

	useEffect(() => {
		getCurrentDate();
	}, []);

	return (
		<Card className='flex flex-col justify-center items-center w-[400px] h-[400px]'>
			<CardHeader className='flex flex-col justify-center items-center'>
				<CardTitle className='text-center text-8xl'>
					{(weather.main.temp - 273.15).toFixed(1)}°C
				</CardTitle>
				<CardDescription className='text-center text-2xl'>
					{currentDate}
				</CardDescription>
			</CardHeader>
			<Separator orientation='horizontal' />
			<CardContent className='flex flex-row justify-evenly items-center mt-10'>
				<div className='flex flex-col justify-center items-center w-[90px] h-[90px]'>
					<Building2 className='mb-2' />
					{weather.name}
				</div>
				<Separator orientation='vertical' />
				<div className='flex flex-col justify-center items-center w-[90px] h-[90px]'>
					<Gauge className='mb-2' />
					{weather.main.pressure}hPa
				</div>
				<Separator orientation='vertical' />
				<div className='flex flex-col justify-center items-center w-[90px] h-[90px]'>
					<Droplets className='mb-2' />
					{weather.main.humidity}%
				</div>
				<Separator orientation='vertical' />
				<div className='flex flex-col justify-center items-center w-[90px] h-[90px]'>
					<Wind className='mb-2' />
					{(weather.wind.speed*0.44).toFixed(2)}km/h
				</div>
			</CardContent>
		</Card>
	);
}
