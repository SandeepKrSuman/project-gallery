import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="light"
    >
      <Container>
        <Navbar.Brand className="nvbrand" href="/">
          <img alt="logo" src="/assets/logo.png" className="logo" /> Project
          <span> Gallery </span>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a
              className="contribute"
              href="https://github.com/SandeepKrSuman/project-gallery"
            >
              Contribute
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
