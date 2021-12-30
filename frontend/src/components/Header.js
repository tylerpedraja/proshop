import header from 'react';
import { LinkContainer as Link} from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to ="/">
                                <Nav.Link className="me-2"><i className="fas fa-shopping-cart me-1"></i>Cart </Nav.Link>
                            </Link>
                            <Link to="/">
                                <Nav.Link><i className="fas fa-user me-2"></i>Sign in</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
