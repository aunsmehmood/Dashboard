import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Layout/Charts.scss";
import { state } from "./common-data/Common-Data.jsx";
import { Box } from "@mui/material";

export default function Charts() {
  return (
    <Box
      sx={{
        marginTop: "20px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
      }}
      id="chart"
      className="chart"
    >
      <Box
        sx={{
          marginLeft: "20px",
          paddingTop: "20px",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "28px",
          color: "#888",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h3>
        LOYALTY ANALYTICS
        </h3>
      </Box>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </Box>
  );
}
