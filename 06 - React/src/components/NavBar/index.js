import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from './styled';

export default function NavBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink to="/">
                        <Navbar.Brand>HomePage</Navbar.Brand>
                    </NavLink>
                    <NavLink to="/ToDoList">
                        ToDoList
                    </NavLink>
                    <NavLink to="/Calculator">
                        Calculator
                    </NavLink>
                    <NavLink to="/Click">
                        Click
                    </NavLink>
                    <NavLink to="/Counter">
                        Counter
                    </NavLink>
                    <NavLink to="/Coffee">
                        Coffee
                    </NavLink>
                    <NavLink to="/MusicAPI">
                        MusicAPI
                    </NavLink>
                    <NavLink to="/CountriesAPI">
                        CountriesAPI
                    </NavLink>
                    <NavLink to="/Register">
                        Register
                    </NavLink>
                </Container>
            </Navbar>
        </>);
}