import { useNavigate } from "react-router";
import classes from "./HaveACat.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/imgs/image 1.png";
import Image2 from "../../assets/imgs/image 2.png";
import Image3 from "../../assets/imgs/image 3.png";
import { Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const HaveACat = () => {

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/catSpecs");
  };

  return (
    <Container className={classes.haveACatContainer}>
      <div className={classes.haveACatContentContainer}>
        <Row className={classes.rowContainer}>
          <Col sm={6} md={6} lg={5}>
            <h1 className={classes.haveACatTitle}>Why should you have a cat?</h1>
            <p className={classes.haveACatText}>
              Having a cat around you can actually trigger the release of calming chemicals in your body
              which lower stress and anxiety levels
            </p>
            <Button className={classes.haveACatButton} endIcon={<ArrowRightAltIcon />} onClick={handleReadMore}>
              Read More
            </Button>
          </Col>

          <Col sm={6} md={6} lg={7}>
            <div className={classes.gridContainer}>
              <div className={classes.img1}>
                <img src={Image3} alt="cat_img_3" loading="lazy" className="w-100" />
              </div>
              <div className={classes.img2}>
                <img src={Image2} alt="cat_img_2" loading="lazy" className="w-100" />
              </div>
              <div className={classes.img3}>
                <img src={Image1} alt="cat_img_1" loading="lazy" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
};

export default HaveACat;