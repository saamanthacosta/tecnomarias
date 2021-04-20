import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/imagens/logo-header.png"


export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
      <img
        alt="logo-header"
        src={logo}
        width="180"
        height="35"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#vagas">Vagas</Nav.Link>
                    <Nav.Link href="#cadastros">Cadastros</Nav.Link>
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <Nav.Link href="#conecte-se">Conecte-se</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}