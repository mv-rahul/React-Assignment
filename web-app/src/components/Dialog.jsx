import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@material-ui/core";
import { useStore } from "../store/index";

export const ReactDialog = (props) => {
  const { deleteUser } = useStore();
  const onClickYes = () => {
    deleteUser(props.id);
    props.onClose();
  };
  return (
    <Dialog
      open={props.open}
      onClose={() => props.onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <DialogContentText>
          Are you sure you want to permantly delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClickYes()}>Yes</Button>
        <Button onClick={() => props.onClose()} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};
