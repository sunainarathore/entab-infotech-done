import React from "react";
import "./summary-box.scss";
import Box from "../box/Box";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { colors } from "../../constants";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { style } from "../../assets/stylesheet/Style.css";
import {
  CardHeader,
  IconButton,
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import { Line } from "react-chartjs-2";
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

const SummaryBox = ({ item }) => {
  return (
    <Box className="upcoming-jobs-section">
      <Grid justifyContent="flex-start" alignItems="flex-start">
        <Grid className="card-header">
          <CardHeader
            className="card-header-heading"
            action={
              <IconButton className="filter-section-icon" aria-label="settings">
                <FilterAltOutlinedIcon />
              </IconButton>
            }
            title="Upcomings Jobs"
          />
        </Grid>
      </Grid>
      <ListSubheader
        sx={{
          position: "relative",
          overflowX: "hidden",
          maxHeight: 300,
          width: "100%",
          padding: "0px",
        }}
      >
        <Grid
          spacing={2}
          columns={16}
          className="summary-box job-searching-grid-inner"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={8}
            className="summary-box__info summary-box__info_section "
          >
            <div className="summary-box__info__title">
              <span className="jobidbox">{item.Jobid}</span>
              <div className="jobidtitle">{item.title}</div>
            </div>
            <div className="summary-box__info__title">
              <span className="jobidbox">{item.jobscheduled}</span>
              <div className="jobidtitle">{item.title}</div>
            </div>
          </Grid>
         
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={8}
            className="summary-box__chart"
          >
            <Grid className="job-searching-grid ">
              <List className="job-secaring-list">
                <ListItem alignItems="flex-start joblistitemname backgroundone">
                  <ListItemText
                    className="first-letf-side"
                    primary="Brunch "
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          998675437
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <ListItemAvatar className="list-avatar-img">
                    <Avatar
                      className="listavataimg"
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                </ListItem>
                <Button className="jobsupdating" variant="outlined">
                  washing machine fix
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          spacing={2}
          columns={16}
          className="summary-box job-searching-grid-inner backgroundtwo"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={8}
            className="summary-box__info summary-box__info_section "
          >
            <div className="summary-box__info__title">
              <span className="jobidbox">{item.Jobid}</span>
              <div className="jobidtitle">{item.title}</div>
            </div>
            <div className="summary-box__info__title">
              <span className="jobidbox">{item.jobscheduled}</span>
              <div className="jobidtitle">{item.title}</div>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={8}
            className="summary-box__chart"
          >
            <Grid className="job-searching-grid ">
              <List className="job-secaring-list">
                <ListItem alignItems="flex-start joblistitemname backgroundone">
                  <ListItemText
                    className="first-letf-side"
                    primary="Brunch "
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          998675437
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <ListItemAvatar className="list-avatar-img">
                    <Avatar
                      className="listavataimg"
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                </ListItem>
                <Button className="jobsupdating" variant="outlined">
                  washing machine fix
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          spacing={2}
          columns={16}
          className="summary-box job-searching-grid-inner backgroundthree"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={8}
            className="summary-box__info summary-box__info_section "
          >
            <div className="summary-box__info__title">
              <span className="jobidbox">{item.Jobid}</span>
              <div className="jobidtitle">{item.title}</div>
            </div>
            <div className="summary-box__info__title">
              <span className="jobidbox">{item.jobscheduled}</span>
              <div className="jobidtitle">{item.title}</div>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={8}
            className="summary-box__chart"
          >
            <Grid className="job-searching-grid ">
              <List className="job-secaring-list">
                <ListItem alignItems="flex-start joblistitemname backgroundone">
                  <ListItemText
                    className="first-letf-side"
                    primary="Brunch "
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          998675437
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <ListItemAvatar className="list-avatar-img">
                    <Avatar
                      className="listavataimg"
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                </ListItem>
                <Button className="jobsupdating" variant="outlined">
                  washing machine fix
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </ListSubheader>
    </Box>
  );
};

export default SummaryBox;

export const SummaryBoxSpecial = ({ item }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: "Revenue",
        data: item.chartData.data,
        borderColor: "#6666ff",
        tension: 0.5,
      },
    ],
  };
  return (
    <Grid purple fullheight>
      <div className="summary-box-special">
        <div className="summary-box-special__title">{item.title}</div>
        <div className="summary-box-special__value">{item.value}</div>
        <div className="summary-box-special__chart">
          <Line options={chartOptions} data={chartData} width={`1000px`} />
        </div>
      </div>
    </Grid>
  );
};
