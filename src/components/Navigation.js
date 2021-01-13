import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="id">
          <div className="idContent">
            <img src="./media/billGates.jpg" alt="profile-pic" />
            <h3>Full Name</h3>
          </div>
        </div>
        <div className="navlink">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
            </li>
             <li>
              <NavLink exact to="/competances" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Competances</span>
            </NavLink>
            </li>
             <li>
              <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Portfolio</span>
            </NavLink>
            </li>
             <li>
              <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Contact</span>
            </NavLink>
            </li>
           </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <li>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;