import { AppLayout } from "./AppLayout";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Header } from "./Header";
import { Users } from "./UserManagement/Users";

export const AppViews = () => (
  <AppLayout>
    <AppLayout.Header>
      <Header></Header>
    </AppLayout.Header>
    <AppLayout.Body>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/users" render={() => <Users />} />
      </Switch>
    </AppLayout.Body>
  </AppLayout>
);
