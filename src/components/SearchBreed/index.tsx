import React from "react";
import { LogoCat } from "..";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./SearchBreed.module.css";
import { Autocomplete, TextField } from "@mui/material";

const SearchBreed = () => {

  const tempralOptions = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
  ];

  return (
    <Container fluid>
      <Row className={classes.searchBreedContainer}>
        <Col sm={12} md={6} lg={{ span: 4, offset: 1 }}>
          <LogoCat />
          <p className={classes.searchBreedText}>Get to know more about your cat breed</p>
          <Autocomplete options={tempralOptions} renderInput={(params) => <TextField {...params} label="Movie" />}/>
        </Col>
      </Row>
    </Container>
  )
};

export default SearchBreed;