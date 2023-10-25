import * as React from "react";
import {
  Typography,
  ListItemText,
  Divider,
  List,
  ListItem,
  Grid,
  Box,
  CardHeader,
} from "@mui/material";

export default function Todaysstats() {
  return (
    <Box className="upcoming-jobs-section todaysseats-box-section">
      <Grid justifyContent="flex-start" alignItems="flex-start">
        <Grid className="card-header">
          <CardHeader className="card-header-heading" title="Today,s Stats" />
        </Grid>
      </Grid>
      <Grid className="list-of-todays-item-section">
      <List className="todays-list-one">
        <Typography className="todays-heading-section">Monday</Typography>
        {[0, 1, 2, 3].map((value) => {
          return (
            <Grid className="divider">
              <ListItem
                className="todaysseats-box-sectionlistitem"
                secondaryAction={
                  <ListItemText
                    className="todaysseats-box-sectionlisttext"
                    edge="end"
                    aria-label="comments"
                  >
                    <Typography className="todaysseats-box-sectionlisttypo">
                      $ 120.00
                    </Typography>
                  </ListItemText>
                }
              >
                 <Divider />
                <ListItemText
                  className="todaysseats-box-sectionlistitem"
                  role={undefined}
                  dense
                >
                  <ListItemText
                    className="todaysseats-box-sectionlisttypo"
                    primary={`moneycontrol `}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
          );
        })}
      </List>
      
       
        <List className="todays-list-one">
        <Typography className="todays-heading-section">Job</Typography>
        {[0, 1, 2, 3].map((value) => {
          return (
            <Grid className="divider">
              <ListItem
                className="todaysseats-box-sectionlistitem"
                secondaryAction={
                  <ListItemText
                    className="todaysseats-box-sectionlisttext"
                    edge="end"
                    aria-label="comments"
                  >
                     
                    <Typography className="todaysseats-box-sectionlisttypo">
                      $ 120.00
                    </Typography>
                  </ListItemText>
                }
              >
                <Divider />
                <ListItemText
                  className="todaysseats-box-sectionlistitem"
                  role={undefined}
                  dense
                >
                  <ListItemText
                    className="todaysseats-box-sectionlisttypo"
                    primary={`moneycontrol `}
                  />
                </ListItemText>
              </ListItem>
            </Grid>
          );
        })}
      </List>
      </Grid>
    </Box>
  );
}
