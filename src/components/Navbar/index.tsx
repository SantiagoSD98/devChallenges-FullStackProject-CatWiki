import { Navbar, NavbarBrand } from "react-bootstrap";
import LogoCatWiki from "./../../assets/imgs/CatwikiLogo.svg";

const NavbarApp = () => {

  const goHome = () => {
    document.location.href="/";
  };

  return (
    <Navbar>
      <NavbarBrand onClick={goHome} style={{cursor: "pointer"}}>
        <img src={LogoCatWiki} alt="logo_cat_wiki"/>
      </NavbarBrand>
    </Navbar>
  )
};

export default NavbarApp;