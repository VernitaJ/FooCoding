import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./styles.css";

/**
 * VIEWS
 * Read more about views in `docs/VIEWS.md`
 */
import ProfileView from "./views/ProfileView";
import EditView from "./views/EditView";
import HomeView from "./views/HomeView";

export default function App() {
  return (
    <Router>
      <Route exact path="/:uname/edit" component={EditView} />
      <Route exact path="/:uname" component={ProfileView} />
      <Route exact path="/" component={HomeView} />
    </Router>
  );
}
