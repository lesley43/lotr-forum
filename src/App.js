import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar.component";
import PostsList from "./components/post-list.component";
import PostEdit from "./components/post-edit.component";
import PostCreate from "./components/post-create.component";
import UserCreate from "./components/user-create.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={PostsList} />
      <Route path="/edit/:id" component={PostEdit} />
      <Route path="/create" component={PostCreate} />
      <Route path="/users" component={UserCreate} />
    </Router>
  );
}

export default App;
