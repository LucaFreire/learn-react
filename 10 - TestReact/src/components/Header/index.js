import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from './styled'
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    return (<>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/">CEP</NavLink>
                <NavLink to="/About">About</NavLink>
                <></>
            </Container>
        </Navbar>
        <Outlet></Outlet>
    </>);
};

export default Header;