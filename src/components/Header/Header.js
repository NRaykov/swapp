import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import LoginButton from "../LoginSystem/guards/loginBtn";


const Header = ({themeChanger}) => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
          <>
            <header className="header">
              <Navbar className="navbar" light expand="md">
                <NavbarBrand href="/#"
                             className="logo"
                             onClick={themeChanger}
                >swapp</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link className="nav-link" to="/episodes/">Episodes</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/characters/">Characters</Link>
                    </NavItem>
                    <NavItem>
                      <LoginButton/>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </header>
         </>
  )
};

export default Header;
