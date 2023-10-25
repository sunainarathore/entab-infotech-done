import React from "react";
import Box from "../components/box/Box";
import UnassignedJob from '../components/unassignedjob/UnassignedJob';
import { Grid, Typography, Divider } from "@mui/material";
import AssignedJob from "../components/assignedjob/AssignedJob";

const Jobs = () => {
  return (
    
    <Grid container direction="row" justifyContent="center" alignItems="center" className="Dashboard-page-section-box">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="dashboardtop-section jobs-page-section-for-jobes"
      >
        <Grid className="jobs-page-section-for-jobesgrid" container direction="row">
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            md={4}
            xl={4}
            className="col-4 jobs-page-section-for-jobesone"
          >
            <Box><UnassignedJob/></Box>
            </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            md={4}
            xl={4}
            className="col-4  jobs-page-section-for-jobesone"
          >
            <Box >
             <AssignedJob/>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            md={4}
            xl={4}
            className="col-4  jobs-page-section-for-jobesone"
          >
             <Box >
             <AssignedJob/>
            </Box>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Jobs;






