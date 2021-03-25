import React, { useState } from "react";
import {
  Fab,
  Grid,
  Paper,
  Typography,
  TableCell,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Tooltip,
  Zoom,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Create";
import { UserForm } from "./UserForm";
import { ReactDialog } from "../Dialog";
import { useStore } from "../../store/index";
import moment from "moment";

export const Users = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const [userList] = useStore("userList");
  const openModal = (id) => {
    setId(id);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const openDialog = (id) => {
    setUserToDelete(id);
    setOpenDeleteConfirmation(true);
  };
  const closeDialog = () => {
    setOpenDeleteConfirmation(false);
  };

  const reversedList = userList && userList.reverse();

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <Typography variant="h3">User List</Typography>
        </Grid>
        <Grid item xs>
          <Grid container justify="flex-end">
            <Fab
              variant="extended"
              color="primary"
              size="large"
              onClick={() => openModal("new")}
            >
              <AddIcon />
              Add New
            </Fab>
          </Grid>
        </Grid>
        {userList && userList.length > 0 ? (
          <Grid item xs>
            <Paper className={classes.paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>College</TableCell>
                    <TableCell>Hobbies</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reversedList &&
                    reversedList.map((user, index) => (
                      <TableRow key={user.id}>
                        <TableCell>{++index}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{moment(user.dob).format("L")}</TableCell>
                        {user.address.length > 15 ? (
                          <Tooltip
                            title={user.address}
                            placement="bottom"
                            TransitionComponent={Zoom}
                          >
                            <TableCell>
                              {user.address.substr(0, 15)}...
                            </TableCell>
                          </Tooltip>
                        ) : (
                          <TableCell>{user.address}</TableCell>
                        )}
                        <TableCell>
                          {user.gender ? user.gender.value : "-"}
                        </TableCell>

                        {user.college ? (
                          user.college.value.length > 15 ? (
                            <Tooltip
                              title={user.college.value}
                              placement="bottom"
                              TransitionComponent={Zoom}
                            >
                              <TableCell>
                                {user.college.value.substr(0, 15)}...
                              </TableCell>
                            </Tooltip>
                          ) : (
                            <TableCell>{user.college.value}</TableCell>
                          )
                        ) : (
                          <TableCell>-</TableCell>
                        )}

                        {user.hobbies ? (
                          user.hobbies.length > 2 ? (
                            <Tooltip
                              title={user.hobbies
                                .map((item, ind) => item.value)
                                .toString()}
                              placement="bottom"
                              TransitionComponent={Zoom}
                            >
                              <TableCell>
                                {user.hobbies[0].value}, {user.hobbies[1].value}
                                , {user.hobbies[2].value}...
                              </TableCell>
                            </Tooltip>
                          ) : (
                            <TableCell>
                              {user.hobbies.map((item, ind) => {
                                if (ind === user.hobbies.length - 1) {
                                  return item.value;
                                } else return `${item.value},`;
                              })}
                            </TableCell>
                          )
                        ) : (
                          <TableCell>-</TableCell>
                        )}
                        <TableCell>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <Fab
                                size="small"
                                aria-label="edit"
                                className={classes.edit}
                                onClick={() => openModal(user.id)}
                              >
                                <EditIcon />
                              </Fab>
                            </Grid>
                            <Grid item>
                              <Fab
                                size="small"
                                aria-label="delete"
                                className={classes.delete}
                                onClick={() => openDialog(user.id)}
                              >
                                <DeleteIcon />
                              </Fab>
                            </Grid>
                          </Grid>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
      <UserForm open={modal} onClose={closeModal} id={id} />
      <ReactDialog
        open={openDeleteConfirmation}
        onClose={closeDialog}
        id={userToDelete}
      />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: theme.spacing(4),
  },
  paper: {
    borderRadius: "0.7em",
  },
  container: {
    padding: theme.spacing(3, 4),
  },
  edit: {
    backgroundColor: "#8bc34a",
    boxShadow: "none",
    borderRadius: "0.3em",
  },
  delete: {
    backgroundColor: "#b71c1c",
    boxShadow: "none",
    borderRadius: "0.3em",
  },
}));
