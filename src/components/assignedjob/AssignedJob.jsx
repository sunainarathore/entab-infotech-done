import React from 'react'
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
    ListItemAvatar,
    Avatar,
    ListSubheader,
  } from "@mui/material";
  import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
  import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
  import Style from '../../assets/stylesheet/Style.css';
  import RightSidenav from '../topnav/RightSidenav' 

export default function AssignedJob({item}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
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
        Assigned Job
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
    <Grid>
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
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle"> AAA45678GG</div>
            </div>
            <div className="summary-box__info__title">
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle">AAA45678GG</div>
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
                <RightSidenav /> 
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
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle"> AAA45678GG</div>
            </div>
            <div className="summary-box__info__title">
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle">AAA45678GG</div>
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
                <Button  className="jobsupdating" variant="outlined">
                
                 <RightSidenav /> 
                 
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
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle"> AAA45678GG</div>
            </div>
            <div className="summary-box__info__title">
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle">AAA45678GG</div>
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
                <Button  className="jobsupdating" variant="outlined">
                <RightSidenav /> 
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          spacing={2}
          columns={16}
          className="summary-box job-searching-grid-inner "
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
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle"> AAA45678GG</div>
            </div>
            <div className="summary-box__info__title">
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle">AAA45678GG</div>
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
                <RightSidenav /> 
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
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle"> AAA45678GG</div>
            </div>
            <div className="summary-box__info__title">
              <span className="jobidbox">Job Id</span>
              <div className="jobidtitle">AAA45678GG</div>
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
                <RightSidenav /> 
                </Button>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </ListSubheader>
    </Grid>
    </Grid>
  )
}
