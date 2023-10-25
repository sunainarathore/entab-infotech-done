import React from "react";
import SummaryBox from "../summary-box/summary-box.scss";
import {
    CardHeader,
    IconButton,
    Grid,
  } from "@mui/material";
import Box from "../box/Box";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { colors } from "../../constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CircularProgressbar = ({ item }) => {
  return (
    <Grid className="CircularProgressbarWithChildren">
    <Grid justifyContent="flex-start" alignItems="flex-start">
      <Grid className="card-header">
        <CardHeader
          className="card-header-heading" title="Job Assigned " >
            
        </CardHeader>
        
      </Grid>
    </Grid>
    <Grid className="CircularProgressbar-chart">
    <CircularProgressbarWithChildren
      value={item.percent}
      strokeWidth={10}
      styles={buildStyles({
        pathColor: item.percent < 50 ? colors.red : colors.purple,
        trailColor: "transparent",
        strokeLinecap: "round",
      })}
    >
      <div className="CircularProgressbar__chart__value">{item.percent}%</div>
    
    </CircularProgressbarWithChildren>
    </Grid>
   
    </Grid>
  );
};

export default CircularProgressbar;
