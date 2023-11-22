import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Layout/Charts.css";
import { state } from "./common-data/Common-Data.jsx";

export default function Charts() {
  return (
    <div id="chart" className="chart">
      <h3>LOYALTY ANALYTICS </h3>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
}
