import React from "react";
import Users from './Users'
import Home from "./Home";

const Routes = {
  "/": () => <Users />,
  "/home": () => <Home />,
 
};
export default Routes;