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
      </Container>
    </Navbar>
  );
}
