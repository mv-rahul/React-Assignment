import React from "react";
import { AppLayout } from "./AppLayout/AppLayout";
import { Drawer } from "./Drawer";
import { Users } from "./UserManagement/Users";

export const AppViews = () => (
  <AppLayout>
    <AppLayout.AppDrawer>
      <Drawer />
    </AppLayout.AppDrawer>
    <AppLayout.Body>
      <Users />
    </AppLayout.Body>
  </AppLayout>
);
