import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Prival</Navbar.Brand>
      <Navbar.Collapse className="justify-content-center">
        <Nav>
          <Nav.Link>캘린더명</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Text className="justify-content-end">로그인</Navbar.Text>
    </Navbar>
  );
}

export default Navigation;
