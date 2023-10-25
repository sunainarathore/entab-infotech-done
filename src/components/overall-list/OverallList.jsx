import React from "react";
import "./overall-list.scss";
import { data } from "../../constants";
import { Card, Grid, Typography } from "@mui/material";

const icons = [
  <i className="bx bx-receipt"></i>,
  <i className="bx bx-user"></i>,
  <i className="bx bx-cube"></i>,
  <i className="bx bx-dollar"></i>,
  <i className="bx bx-receipt"></i>,
  <i className="bx bx-user"></i>,
];

const OverallList = () => {
  return (
    <Grid
      container
      direction="row"
     
      item
      xs={12}
      sm={12}
      lg={12}
      md={12}
      xl={12}
    >
      <Grid
      spacing={3}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        className="overall-list overlistitem-section-box"
      >
        {data.overall.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            md={4}
            xl={4}
            
            className="overall-list__item overlistitem-sectionbox"
            key={`overall-${index}`}
          >
            <Grid className="overallcard-box">
              <Grid className="overall-list__item__info overlistitem-section-boxesb">
                <Typography className="overall-list__item__icon overlistitem-section-icons">
                  {icons[index]}
                </Typography>
                <Grid className="title overlistitem-section-boxoses">
                  <Grid className="boxoses-title">{item.value}</Grid>
                  <Grid className="overlistitem-section-box-in">
                    {item.title}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OverallList;
