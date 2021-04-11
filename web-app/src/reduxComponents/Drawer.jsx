import React, { useState } from "react";
import {
  Drawer as ReactDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import UserForm from "./UserManagement/UserForm";

const drawerWidth = 240;

export const Drawer = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <ReactDrawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
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
      <UserForm open={modal} onClose={closeModal} id="new" />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  drawer: {
    minWidth: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    minWidth: drawerWidth,
  },
  // text: {
  //   ["@media (max-width:1000px)"]: { color: "yellow" },
  // },
}));
