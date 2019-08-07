import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import Main from "./components/Main";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main}>
        <Route component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(router, document.getElementById("root"));
