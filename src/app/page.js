"use client";

import { useState, useEffect } from "react";
import { MainWeatherBlock } from "@/components/MainWeatherBlock";
import { ChildrenWeatherBlock } from "@/components/ChildrenWeatherBlock";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [futureWeather, setFutureWeather] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getCurrentWeather = async () => {
			try {
				const res = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=52.235222460806824&lon=21.007971334854712&appid=eedaa662984b720f11bc0c8b71b663c3`
				);
				const dataJson = await res.json();
				setCurrentWeather(dataJson);
				console.log(dataJson);
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				console.log("pobrano pogodę");
				setLoading(false);
			}
		};

		getCurrentWeather();
	}, []);

	useEffect(() => {
		const getFutureWeather = async () => {
			try {
				const res = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?lat=52.13&lon=21&cnt=35&appid=eedaa662984b720f11bc0c8b71b663c3`
				);

				const dataJson = await res.json();
				setFutureWeather(dataJson);
				console.log(dataJson);
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				console.log("pobrano pogodę");
				setLoading(false);
			}
		};

		getFutureWeather();
	}, []);

	return (
		<div className='flex flex-col'>
			<p>{error && "Nie udało się pobrać pogody"}</p>
			<p>{loading && "Ładowanie pogody..."}</p>
			<div id='main' className='flex justify-center items-center h-[500px]'>
				{currentWeather && <MainWeatherBlock weather={currentWeather} />}
			</div>
			<Separator orientation="horizontal"/>
			<div id='children' className='flex justify-evenly items-center mt-3 h-[388px]'>
				{futureWeather &&
					futureWeather.list
						.filter(
							(_, idx) => idx === 9 || idx === 17 || idx === 25 || idx === 33
						)
						.map((weather, idx) => (
							<ChildrenWeatherBlock key={idx} weather={weather} />
						))}
			</div>
		</div>
	);
}
