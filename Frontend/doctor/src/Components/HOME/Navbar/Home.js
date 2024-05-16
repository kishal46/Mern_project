import React from 'react';
import image from './image.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Navbar.css';
import image1 from '../../../assets/image1.jpg'
import image2 from '../../../assets/image2.jpg'
import image3 from '../../../assets/image3.jpg'

const Home = () => {
  return (
    <div>
      <div class="container text-center mt-5">
  <div class="row">

    <div class="col">
    <div class="card">
        <img src={image1} className='homeimage'></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>

    <div class="col">
    <div class="card" >
        <img src={image2} className='homeimage'></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>

    <div class="col">
    <div class="card" >
        <img src={image3} className='homeimage'></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>

    <Container fluid className="text-center">
      <Row>
        <Col xs={12} md={6} className='mt-5'>
          <h2 className='title'>Patient-Centric Health Care: Empowering Individuals To Choose Hospitals and Doctors for Appointment Scheduling</h2>
        </Col>
        <Col xs={12} md={6} className="mt-5">
          <img src={image} alt="Booking App" className="img-fluid" />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Home;
