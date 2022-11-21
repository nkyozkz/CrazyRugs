import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/Cartwidget";

const NavBar = () => {
    return (
        <Navbar className="navbar-dark bg-dark m-6">
            <Container>
                <Navbar.Brand className="navbar-brand logo" href="#Home">Crazy Rugs</Navbar.Brand>
                <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <Nav className="me-auto"></Nav>
                    <Nav className="navbar-nav">
                        <Nav.Link className="nav-link" aria-current="page" href="#Home">Inicio</Nav.Link>
                        <Nav.Link className="nav-link" href="#Productos">Productos</Nav.Link>
                        <Nav.Link className="nav-link" href="#Contacto">Contacto</Nav.Link>
                        <Nav.Link className="nav-link" href="#Info & Preguntas">Info & Preguntas</Nav.Link>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;