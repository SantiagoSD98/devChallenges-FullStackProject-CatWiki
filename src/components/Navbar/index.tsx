import React from "react";
import LogoCatWiki from "./../../assets/imgs/CatwikiLogo.svg";
import { Navbar, NavbarBrand } from "react-bootstrap";

const NavbarApp = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <img src={LogoCatWiki} alt="logo_cat_wiki"/>
      </NavbarBrand>
    </Navbar>
  )
};

export default NavbarApp;