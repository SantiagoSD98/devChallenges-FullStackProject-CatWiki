import React from 'react';
import { NavbarApp, SearchBreed, MostSearchBreed, HaveACat, Footer } from './components';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <Container>
      <NavbarApp />
      <SearchBreed/>
      <MostSearchBreed/>
      <HaveACat/>
      <Footer/>
    </Container>
  );
}

export default App;
