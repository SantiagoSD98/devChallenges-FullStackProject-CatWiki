import React from "react";
import classes from "./TopBreeds.module.css";
import { Container, Row, Col } from "react-bootstrap";
import DummyPic from "../../assets/imgs/DummyPhoto.png";

const TopBreeds = () => {

  const tempralOptions = [
    { breed: 'The Shawshank Redemption', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
    { breed: 'The Godfather', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
    { breed: 'The Godfather: Part II', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
    { breed: 'The Dark Knight', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
    { breed: 'Angry Men', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
    { breed: "Schindler's List", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
    { breed: 'The Shawshank Redemption', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
    { breed: 'The Godfather', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
    { breed: 'The Godfather: Part II', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
    { breed: 'The Dark Knight', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae leo in arcu elementum tristique. Praesent accumsan sit amet velit nec pellentesque. Maecenas in lectus eu est lobortis egestas ac vel sem. Donec tempus scelerisque dui vitae mattis. Aenean vel ornare mauris. Maecenas sed ligula purus. Sed mi nulla, consectetur nec purus a, porta ornare neque. Cras et urna dictum, mattis turpis nec, pellentesque diam. Integer rhoncus, sapien et condimentum rhoncus, nisi mi vulputate est, at vestibulum ex orci non nisi." },
  ];

  return (
    <Container fluid className={classes.TopBreedsContainer}>
      {tempralOptions.map((singleBreed: any, index: number) => {
        return (
          <Row key={index} className="my-5">
            <Col sm={2} md={2} lg={2}>
              <div style={{width: "90%", margin: "0 auto"}}>
                <img src={DummyPic} alt="dummy_pic" className="w-100"/>
              </div>
            </Col>
            <Col sm={10} md={10} lg={10}>
              <h1 className={classes.TopBreedTitle}>{index + 1}. {singleBreed.breed}</h1>
              <p className={classes.TopBreedText}>{singleBreed.description}</p>
            </Col>
          </Row>
        )
      })}
      
    </Container>
  )
}

export default TopBreeds;