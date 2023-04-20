import React from "react";
import ReactECharts from "echarts-for-react";
import moment from "moment";

const HourlyWeatherChart = ({ hourlyForecastData }) => {
	const options = {
		title: {
			fontWeight: "bold",
			left: "5%"
		},
		grid: {
			top: "10%",
			bottom: "7%",
			left: "7%",
			right: "7%"
		},
		xAxis: {
			type: "category",
			name: "Hours",
			boundaryGap: false,
			data: hourlyForecastData.map((item, index) => {
				return moment(item.fxTime).format("hh");
			})
		},
		yAxis: {
			type: "value",
			name: "Temperature",
			scale: true
		},
		series: [
			{
				name: "Temperature",
				data: hourlyForecastData.map((item) => Number(item.temp)),
				type: "line",
				showSymbol: false,
				smooth: true,
				symbol: "circle",
				symbolSize: 5,
				lineStyle: {
					color: "#5596F6"
				},
				areaStyle: {
					color: "#5596F6",
					opacity: 0.5
				},
				emphasis: {
					disabled: true
				}
			}
		],
		tooltip: {
			show: true,
			trigger: "axis",
			lineStyle: {
				type: "line"
			},
			axisPointer: {
				type: "none",
				axis: "auto",
				label: {
					backgroundColor: "#6a7985"
				}
			}
		}
	};
	return (
		<div>
			<ReactECharts
				option={options}
				notMerge={true}
				lazyUpdate={false}
				style={{ height: "270px" }}
			/>
		</div>
	);
};

export default HourlyWeatherChart;
