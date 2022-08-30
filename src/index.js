import React from "react";
import ReactDOM from "react-dom/client";

//  CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style/index.css";
//  Component
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Navbar, Nav, NavbarBrand, NavLink } from "react-bootstrap";
//  Page Element
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";

import reportWebVitals from "./reportWebVitals";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <NavbarBrand>Imanuel Antonio</NavbarBrand>
          <Nav>
            <NavLink href="/home">Home</NavLink>
            <NavLink href="/contactme">ContactMe</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="root">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

reportWebVitals();
