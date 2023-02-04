import React from "react";
import { Button } from "@mui/material";
import classes from "./MostSearchBreed.module.css";
import { Container, Row, Col } from "react-bootstrap";
import DummyPic from "../../assets/imgs/DummyPhoto.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const MostSearchBreed = () => {
  
  const arrayImg = [
    { breed: "bengal", first: true },
    { breed: "savannah", first: false },
    { breed: "norweign forest cat", first: false },
    { breed: "selkirik rex", first: false },
  ];

  return (
    <Container fluid className={`${classes.mostSearchBreedContainer}`}>
      <div className={classes.mostSearchBreedBreedContentContainer}>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <p className={classes.mostSearchBreedText}>Most Search Breeds</p>
          </Col>
        </Row>

        <Row className="align-items-end">
          <Col sm={6} md={6} lg={6} className="">
            <h1 className={classes.mostSearchBreedTitle}>66+ Breeds For you to discover</h1>
          </Col>
          <Col sm={6} md={6} lg={6} className="text-end ">
            <Button className={classes.mostSearchBreedButton} endIcon={<ArrowRightAltIcon />}>
              Read More
            </Button>
          </Col>
        </Row>

        <Row>
          {arrayImg.map((cat) => {
            return (
              <Col sm={3} md={3} lg={3} key={cat.breed}>
                <div style={{width: "90%", margin: "0 auto"}}>
                  <img src={DummyPic} alt="dummy" loading="lazy" className="w-100"/>
                  <p className={`${classes.mostSearchBreedBreed}`}>{cat.breed}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </Container>
  )
};

export default MostSearchBreed;