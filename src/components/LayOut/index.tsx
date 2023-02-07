import React from "react";
import { Footer, NavbarApp } from "..";
import classes from "./LayOut.module.css";
import { Container } from "react-bootstrap";

const LayOut = ({ children }: {children: any}) => {
  return (
    <Container className={classes.mainBody}>
      <NavbarApp/>
      {children}
      <Footer/>
    </Container>
  )
};

export default LayOut;