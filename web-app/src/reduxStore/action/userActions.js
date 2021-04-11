import { CREATE_USER, UPDATE_USER, DELETE_USER } from "./actionTypes";

export const createUser = (userData) => {
  return async (dispatch, getState) => {
    const list = getState();
    const arr = list.users.userList.map((item) => item);
    arr.push(userData);
    dispatch(creatingNewUser(arr));
  };
};

export const updateUser = (id, userData) => {
  return async (dispatch, getState) => {
    const list = getState();
    const updatedList = list.users.userList.map((item) => {
      if (item.id === id) return userData;
      else return item;
    });
    dispatch(updatingUser(updatedList));
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    const list = getState();
    const deletedList = list.users.userList.filter((item) => {
      if (item.id === id) {
      } else return item;
    });
    dispatch(deletingUser(deletedList));
  };
};

const creatingNewUser = (userList) => ({
  type: CREATE_USER,
  payload: userList,
});

const updatingUser = (userList) => ({
  type: UPDATE_USER,
  payload: userList,
});

const deletingUser = (userList) => ({
  type: DELETE_USER,
  payload: userList,
});
