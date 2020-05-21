import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa'
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleTogle =() =>{
      this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach resort" />
            </Link>
            <button type='submit' className='nav-btn' onClick={this.handleTogle}>
                <FaAlignRight className='nav-icon'/>
            </button>
          </div>
          <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
              <li><Link to='/'>home</Link></li>
              <li><Link to='/rooms'>Room</Link></li>

          </ul>
        </div>
      </nav>
    );
  }
}
