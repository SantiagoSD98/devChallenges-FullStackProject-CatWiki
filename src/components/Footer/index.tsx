import { LogoCat } from "..";
import styles from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {

  const stylesLogo = {
    width: "100%"
  };

  const goHome = () => {
    document.location.href="/";
  };

  return (
    <Row className={`align-items-center ${styles.footer}`}>
      <Col sm={2} md={2} lg={2} >
        <div style={{width: "60%", margin: "0 auto", cursor: "pointer"}} onClick={goHome}>
          <LogoCat styles={stylesLogo} />
        </div>
      </Col>
      <Col sm={10} md={10} lg={10} className="text-end">
        <p className={styles.footerText}>© Created by SantiagoSD98 - devChallenge.io 2023</p>
      </Col>
    </Row>
  )
};

export default Footer;