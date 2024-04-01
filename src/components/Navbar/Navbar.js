import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import Logo from '../../img/logo-no-background.png';
import { FaBars, FaTimes } from 'react-icons/fa';
 
class Navbar extends Component {
  state = { 
    clicked: false
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <nav className="NavbarItems"> 
        <img className="mylogo" src={Logo} alt='Logo' />
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}> 
                <a className={item.cName} href={item.url}>
                  {item.title}  
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

