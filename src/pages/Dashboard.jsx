import React from "react";
import { Bar } from "react-chartjs-2";
import Box from "../components/box/Box";
import SummaryBox, { SummaryBoxSpecial } from "../components/summary-box/SummaryBox";
import { colors, data } from "../constants";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import OverallList from "../components/overall-list/OverallList";
import { Grid, Typography, Divider } from "@mui/material";
import Todaysstats from "../components/Todaystats/Todaysstats";
import Invoing from "../components/invoing/Invoing";
import CircularProgressbar from '../components/Circle-chart/CircularProgressbar'



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = (item) => {
  return (
    
    <Grid container direction="row" justifyContent="center" alignItems="center" className="Dashboard-page-section-box">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="dashboardtop-section"
      >
        <Grid container direction="row">
          <Grid
            item
            xs={12}
            sm={12}
            lg={3}
            md={3}
            xl={3}
            className="col-3  Dashboard-page-section-box-md"
          >
            <Grid>
              {data.summary.map((item, index) => (
                <Grid key={`summary-${index}`}>
                  <SummaryBox item={item} />
                  
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={3}
            md={3}
            xl={3}
            className="col-3  Dashboard-page-section-box-md Todaysstats-boxes-section"
          >
            <Box >
              <Todaysstats />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="col-6  Dashboard-page-section-box-md RevenueByMonthsChart-box-section"
          >
            <Box>
              <RevenueByMonthsChart />
            </Box>
            
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="dashboardbottom-section"
      >
        <Grid container direction="row">
          <Grid
            item
            xs={12}
            sm={12}
            lg={3}
            md={3}
            xl={3}
            className="col-3  Dashboard-page-section-box-md"
          >
            <Box className="summary-box__chart">
            <Grid>
              {data.summaryone.map((item, index) => (
                <Grid key={`summaryone-${index}`}>
                  <CircularProgressbar item={item} />
                  
                </Grid>
              ))}
            </Grid>
            
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={3}
            md={3}
            xl={3}
            className="col-3  Dashboard-page-section-box-md"
          >
            <Box>
              <Invoing />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="col-6  Dashboard-page-section-box-md Boxshadownoneforbox"
          >
           <Box > <OverallList /></Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;




const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenueByMonths.data,
      },
    ],
  };
  return (
    <>
      <Typography className="incomingjoblast">In Coming Job</Typography>
      <Divider className="incomingjoblastDivider" variant="inset" />
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};


