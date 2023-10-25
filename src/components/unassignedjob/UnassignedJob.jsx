import React from "react";
import {
  Grid,
  ListItem,
  List,
  ListItemButton,
  IconButton,
  ListItemText,
  Typography,
  ButtonGroup,
  Button,
  ListSubheader
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Style from "../../assets/stylesheet/Style.css";

export default function UnassignedJob({ item }) {
  return (
    <Grid
      className="UnAssignedJobcard-header-sectiongrid"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        direction="row"
        className="UnAssignedJobcard-header-section"
      >
        <Typography className="UnAssignedJob-first-heading">
          UnAssigned Job
        </Typography>
        <List className="UnAssignedJob-first-heading-list">
          <ListItem
            className="UnAssignedJob-first-heading-listitem"
            secondaryAction={
              <IconButton className="filter-section-icon">
                <FilterAltOutlinedIcon className="filter-section-iconies" />
              </IconButton>
            }
          >
            <ListItemButton className="UnAssignedJob-first-heading-button">
              <ListItemText className="UnAssignedJob-first-heading-buttontext">
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  className="UnAssignedJob-first-heading-buttongroup"
                >
                  <Button
                    variant="contained"
                    className="UnAssignedJob-first-heading-buttones"
                  >
                    Today
                  </Button>
                  <Button className="UnAssignedJob-first-heading-buttones">
                    This Week
                  </Button>
                  <Button className="UnAssignedJob-first-heading-buttones">
                    This Month
                  </Button>
                </ButtonGroup>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
      <ListSubheader
        sx={{
          position: "relative",
          overflowX: "hidden",
          maxHeight: 600,
          width: "100%",
          padding: "0px",
        }}
      >
      <Grid
        container
        direction="row"
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        xl={12}
        className="summary-box UnAssignedJobcard-searching-grid-box"
      >
        <Grid
          spacing={2}
          columns={16}
          className="summary-box UnAssignedJobcard-searching-grid-inner"
          container
          direction="row"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="UnAssignedJobcard__info summary-box__info_section "
          >
            <div className="UnAssignedJobcard__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job Id
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                AAA45678GG
              </Typography>
            </div>
            <div className="summary-box__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job Id
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                5PM , 1 June
              </Typography>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="summary-box__chart"
          >
            <Grid
              justifyContent="flex-end"
              alignItems="center"
              className="job-searching-grid "
            >
              <List className="Medicaljob-secaring-list">
                <IconButton className="Medicallistavataimg">
                  <MedicalServicesIcon className="listavataimg-ServicesIcon" />
                </IconButton>
                <Button
                  className="jobsupdating UnAssignedJobcard-heading-updating"
                  variant="outlined"
                >
                  washing machine fix
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        xl={12}
        className="summary-box UnAssignedJobcard-searching-grid-box"
      >
        <Grid
          spacing={2}
          columns={16}
          className="summary-box UnAssignedJobcard-searching-grid-inner"
          container
          direction="row"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="UnAssignedJobcard__info summary-box__info_section "
          >
            <div className="UnAssignedJobcard__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job Id
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                AAA45678GG
              </Typography>
            </div>
            <div className="summary-box__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job schedule
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                5PM , 1 June
              </Typography>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="summary-box__chart"
          >
            <Grid
              justifyContent="flex-end"
              alignItems="center"
              className="job-searching-grid "
            >
              <List className="Medicaljob-secaring-list">
                <IconButton className="Medicallistavataimg">
                  <MedicalServicesIcon className="listavataimg-ServicesIcon" />
                </IconButton>
                <Button
                  className="jobsupdating UnAssignedJobcard-heading-updating"
                  variant="outlined"
                >
                  washing machine fix
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        xl={12}
        className="summary-box UnAssignedJobcard-searching-grid-box"
      >
        <Grid
          spacing={2}
          columns={16}
          className="summary-box UnAssignedJobcard-searching-grid-inner"
          container
          direction="row"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="UnAssignedJobcard__info summary-box__info_section "
          >
            <div className="UnAssignedJobcard__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job Id
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                AAA45678GG
              </Typography>
            </div>
            <div className="summary-box__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job schedule
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                5PM , 1 June
              </Typography>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="summary-box__chart"
          >
            <Grid
              justifyContent="flex-end"
              alignItems="center"
              className="job-searching-grid "
            >
              <List className="Medicaljob-secaring-list">
                <IconButton className="Medicallistavataimg">
                  <MedicalServicesIcon className="listavataimg-ServicesIcon" />
                </IconButton>
                <Button
                  className="jobsupdating UnAssignedJobcard-heading-updating"
                  variant="outlined"
                >
                  washing machine fix
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        xl={12}
        className="summary-box UnAssignedJobcard-searching-grid-box"
      >
        <Grid
          spacing={2}
          columns={16}
          className="summary-box UnAssignedJobcard-searching-grid-inner"
          container
          direction="row"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="UnAssignedJobcard__info summary-box__info_section "
          >
            <div className="UnAssignedJobcard__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job Id
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                AAA45678GG
              </Typography>
            </div>
            <div className="summary-box__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job schedule
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                5PM , 1 June
              </Typography>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="summary-box__chart"
          >
            <Grid
              justifyContent="flex-end"
              alignItems="center"
              className="job-searching-grid "
            >
              <List className="Medicaljob-secaring-list">
                <IconButton className="Medicallistavataimg">
                  <MedicalServicesIcon className="listavataimg-ServicesIcon" />
                </IconButton>
                <Button
                  className="jobsupdating UnAssignedJobcard-heading-updating"
                  variant="outlined"
                >
                  washing machine fix
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        xl={12}
        className="summary-box UnAssignedJobcard-searching-grid-box"
      >
        <Grid
          spacing={2}
          columns={16}
          className="summary-box UnAssignedJobcard-searching-grid-inner"
          container
          direction="row"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="UnAssignedJobcard__info summary-box__info_section "
          >
            <div className="UnAssignedJobcard__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job Id
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                AAA45678GG
              </Typography>
            </div>
            <div className="summary-box__info__title">
              <Typography className="UnAssignedJobcard-jobidbox">
                Job schedule
              </Typography>
              <Typography className="UnAssignedJobcard-jobidtitle">
                5PM , 1 June
              </Typography>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            className="summary-box__chart"
          >
            <Grid
              justifyContent="flex-end"
              alignItems="center"
              className="job-searching-grid "
            >
              <List className="Medicaljob-secaring-list">
                <IconButton className="Medicallistavataimg">
                  <MedicalServicesIcon className="listavataimg-ServicesIcon" />
                </IconButton>
                <Button
                  className="jobsupdating UnAssignedJobcard-heading-updating"
                  variant="outlined"
                >
                  washing machine fix
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </ListSubheader>
    </Grid>
  );
}
