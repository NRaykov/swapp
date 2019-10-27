import React, { useState } from 'react';
import styles from './styles.module.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
import { FaSignInAlt } from 'react-icons/fa'; // LogIn
import { FaSignOutAlt } from 'react-icons/fa'; //LogOut

const NavbarComponent = ({}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar className={styles.navbar} light  expand="md">
                <NavbarBrand href="/" className={styles.logo}>swapp</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Episodes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Characters</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={styles.loginButton}><FaSignOutAlt /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
)};

export default NavbarComponent;
