import React from "react";
import classes from "./CatSpecs.module.css";
import { Container, Row, Col } from "react-bootstrap";
import DummyPic from "../../assets/imgs/DummyPhoto.png";

const CatSpecs = () => {

  const LEVELS = [1, 2, 3, 4, 5];

  const catDummyData = {
    breed: "Bengal",
    description: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
    temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
    origin: "United States",
    lifeSpan: "12 - 15 years",
    adaptability: 5,
    affection: 5,
    friendly: 4,
    grooming: 1,
    intelligence: 5,
    healthIssues: 3,
    social: 5,
    stranger: 3 
  }

  const printLevels = (catFeat: any) => {
    return LEVELS.map((singleLevel: any) => singleLevel <= catFeat ? <div className={classes.levelFill} /> : <div className={classes.levelUnfill} /> )
  };


  return (
    <Container fluid className={classes.CatSpecsContainer}>
      <Row>
        <Col sm={4} m={4} lg={4}>
          <div style={{width: "80%", margin: "0 auto"}}>
            <img src={DummyPic} alt="littleCat" className="w-100"/>
          </div>
        </Col>

        <Col sm={8} m={8} lg={8}>
          <h1 className={classes.CatSpecsBreed}>{catDummyData.breed}</h1>
          
          <p className={classes.CatSpecsDescription}>{catDummyData.description}</p>

          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Temperament: </span>
            {catDummyData.temperament}
          </p>
          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Origin: </span>
            {catDummyData.origin}
          </p>

          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Life Span: </span>
            {catDummyData.lifeSpan}
          </p>
          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Adaptability: </span>
            <div className={classes.levelContainer}>
              {printLevels(catDummyData.adaptability)}
            </div>
          </p>
          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Affection level:</span>
            <div className={classes.levelContainer}>
              {printLevels(catDummyData.affection)}
            </div>
          </p>
          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Child Friendly:</span>
            <div className={classes.levelContainer}>
              {printLevels(catDummyData.friendly)}
            </div>
          </p>
          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Grooming:</span>
            <div className={classes.levelContainer}>
              {printLevels(catDummyData.grooming)}
            </div>
          </p>
          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Intelligence:</span>
            <div className={classes.levelContainer}>
              {printLevels(catDummyData.intelligence)}
            </div>
          </p>
          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Health Issues:</span>
            <div className={classes.levelContainer}>
              {printLevels(catDummyData.healthIssues)}
            </div>
          </p>
          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Social needs:</span>
            <div className={classes.levelContainer}>
              {printLevels(catDummyData.social)}
            </div>
          </p>
          <p className={classes.CatSpecsFeatText}>
            <span className={classes.CatSpecsFeat}>Stranger friendly:</span>
            <div className={classes.levelContainer}>
              {printLevels(catDummyData.stranger)}
            </div>
          </p>
          
        </Col>
      </Row>

      <Row>
        <Col sm={12} m={12} lg={12}>
          <h1>Other photos</h1>
        </Col>
      </Row>

      <Row>
        
      </Row>
    </Container>
  )
}

export default CatSpecs;