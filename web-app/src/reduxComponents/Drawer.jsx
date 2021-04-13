import React, { useState } from "react";
import {
  Drawer as ReactDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import UserForm from "./UserManagement/UserForm";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

export const Drawer = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <div className={classes.drawer}>
        <Hidden mdUp>
          <ReactDrawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <List>
              <ListItem button onClick={openModal}>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Add User" />
              </ListItem>
            </List>
          </ReactDrawer>
        </Hidden>
        <Hidden smDown>
          <ReactDrawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <List>
              <ListItem button onClick={openModal}>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Add User" />
              </ListItem>
            </List>
          </ReactDrawer>
        </Hidden>
      </div>
      <UserForm open={modal} onClose={closeModal} id="new" />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    minWidth: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  // text: {
  //   ["@media (max-width:1000px)"]: { color: "yellow" },
  // },
}));
