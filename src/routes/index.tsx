import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditScreen from "../components/EditScreen";
import FirstScreen from "../components/FirstScreen";
import NotFound from "../components/NotFound";
import SelectTheme from "../components/SelectTheme";
import ThankYou from "../components/ThankYou";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstScreen} />
        <Route path="/select-theme" component={SelectTheme} />
        <Route path="/edit-screen" component={EditScreen} />
        <Route path="/tks-screen" component={ThankYou} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
