import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/imagens/logo-header2.PNG";
import { routes } from "../../config/routes";

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <img
                    alt="logo-header"
                    src={logo}
                    width="170"
                    height="50"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Link to="/" style={{ textDecoration: 'none' }} >
                    <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    <Link to={routes.LISTAR_VAGAS} style={{ textDecoration: 'none' }} >
                    <Nav.Link href="#vagas">Vagas</Nav.Link>
                    </Link>
                    <Nav.Link href="#cadastros">Cadastros</Nav.Link>
                    <NavDropdown title="Conecte-se" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/loginpf">Login P. Física</NavDropdown.Item>
                        <NavDropdown.Item href="#action/loginpj">Login P. Jurídica</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#sobre">Sobre</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}