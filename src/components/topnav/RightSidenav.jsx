import * as React from "react";
import {
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  IconButton,
  List,
  ListItem,
  Drawer,
  Button,
  Grid,
  Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ProductReviewForm from '../ProductReview/ProductReviewForm';


export default function TemporaryDrawer() {
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

  const list = (anchor) => (
    <Grid className="right-side-navbar" container direction="row">
   <Grid container direction="row" justifyContent="center" alignItems="center" item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            xl={12}>
   <List className="list-tiemaction" >
        <ListItem
        className="ListItem-list-tiemaction"
          secondaryAction={
            <IconButton className="ListItem-list-tiemactionbutton" edge="end" aria-label="comments">
              <CloseIcon  className="ListItem-list-tiemactionicon "/>
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton className="ListItem-list-tiemactionlistbutton" dense>
            <ListItemIcon className="ListItem-list-tiemactionlisticon">
              <DeleteOutlineOutlinedIcon  className="ListItem-list-tiemactiondelect"/>
            </ListItemIcon>
            <ListItemText className="ListItem-list-tiemactionid" primary="ID Number" secondary="432 YFV ZX12" />
          </ListItemButton>
        </ListItem>
      </List>
   </Grid>
   <Grid container direction="row" justifyContent="center" alignItems="center" item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            xl={12}>
   <ProductReviewForm/>


   </Grid>
    </Grid>
  );

  return (
    <Grid direction="row"
    justifyContent="center"
    alignItems="center" item xs={12} sm={12} lg={12} md={12} xl={12} className="rightnavigationbox">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button  className="rightnavigationboxdrawerbutton " onClick={toggleDrawer(anchor, true)}>washing machine fix</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="rightnavigationboxdrawer"
            primary="washing machine fix"
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Grid>
  );
}
