// Third party libs
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Internal imports
import "./App.css";
import { useStyles } from "./AppStyle";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.backGround}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
