import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/imagens/logo-header2.PNG";
import { routes } from "../../../config/routes";

export default function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <Link to={routes.HOME} style={{ textDecoration: 'none' }} >
                    <img
                        alt="logo-header"
                        src={logo}
                        width="170"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Link to={routes.HOME} style={{ textDecoration: 'none' }} >
                        <Nav.Link href={routes.HOME}>Home</Nav.Link>
                    </Link>
                    <Link to={routes.LISTAR_VAGAS} style={{ textDecoration: 'none' }} >
                        <Nav.Link href={routes.LISTAR_VAGAS}>Vagas</Nav.Link>
                    </Link>
                    <Link to={routes.LISTAR_PF} style={{ textDecoration: 'none' }} >
                        <Nav.Link href={routes.LISTAR_PF}>Pessoas</Nav.Link>
                    </Link>
                    <Link to={routes.LISTAR_PJ} style={{ textDecoration: 'none' }} >
                        <Nav.Link href={routes.LISTAR_PJ}>Empresas</Nav.Link>
                    </Link>
                    {/* <Nav.Link href="#cadastros">Cadastros</Nav.Link>
                    <NavDropdown title="Conecte-se" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/loginpf">Login P. Física</NavDropdown.Item>
                        <NavDropdown.Item href="#action/loginpj">Login P. Jurídica</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#sobre">Sobre</Nav.Link> */}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}