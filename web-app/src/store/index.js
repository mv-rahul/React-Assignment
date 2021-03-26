import React from "react";
import createStore from "react-evoke";
import { initialState } from "./initialState";
import { userActions } from "./Action/user";
const { Store, UseStore, useStore } = createStore();

export const AppStore = ({ children }) => (
  <>
    <Store actions={{ ...userActions }} initialState={initialState}>
      {children}
    </Store>
  </>
);

export { UseStore, useStore };
