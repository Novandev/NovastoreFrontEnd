import React from 'react'
import './header.css'
import Logo from '../../assets/colorful-logo.png'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink, Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from "shards-react";


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { open: false };
      }
    
      toggle() {
        this.setState(prevState => {
          return { open: !prevState.open };
        });
      }
    
    render(){

        return (
        <header>
            <Nav id="nav">
                <NavItem id="logo-wrapper">
                    <NavLink>
                        {/* <img src={Logo} height="50px" width="50px"/> */}
                    <Link id="text-logo" to="/">Novastore</Link>
                    </NavLink>
                </NavItem>
                <div class="menu-right">
                <NavItem>
                    <NavLink>
                    <Link  to="/about">About</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                    <Link to="/contact">Contact</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                <Dropdown open={this.state.open} toggle={this.toggle}>
                    <DropdownToggle nav="True">Account</DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <Link to="/sign-in">Sign In</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to="/register">Register</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to="/dashboard">Dashboard</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </NavItem>
                </div>
            </Nav>
        </header>
        );
    }

}



export default Header;