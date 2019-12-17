import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">LOTR Forum</Link>
        <div className="collase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Posts</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Post</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
