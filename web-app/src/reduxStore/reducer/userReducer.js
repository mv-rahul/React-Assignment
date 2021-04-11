import { CREATE_USER, UPDATE_USER, DELETE_USER } from "../action/actionTypes";

const INITIAL_STATE = {
  userList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, userList: action.payload };
    case UPDATE_USER:
      return { ...state, userList: action.payload };
    case DELETE_USER:
      return { ...state, userList: action.payload };
    default:
      return state;
  }
};
