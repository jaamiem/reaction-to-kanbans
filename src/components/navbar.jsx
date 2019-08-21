import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
      <span className="navbar-brand h1" style={{ paddingTop: '.5em' }}>Kanban</span>
      <div>
        <ul className='navbar-nav'>
          <li className="nav-item ml-4">
            <Link className="nav-link" to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav> 
  );
}

export default Navbar;