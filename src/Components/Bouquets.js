import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import bouquetOne from '../images/bouquet-one.jpeg';
import bouquetTwo from '../images/bouquet-two.jpeg';
import bouquetThree from '../images/bouquet-three.jpeg';
import bouquetFour from '../images/bouquet-four.jpeg';

function Bouquets() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Link to="/bouquet-one">
            <Image src={bouquetOne} width={400} height={400} alt="Bouquet One" thumbnail />
          </Link>
        </Col>
        <Col>
          <Link to="/bouquet-two">
            <Image src={bouquetTwo} width={400} height={400} alt="Bouquet Two" thumbnail />
          </Link>
        </Col>
        <Col>
          <Link to="/bouquet-three">
            <Image src={bouquetThree} width={500} height={1200} alt="Bouquet Three" thumbnail />
          </Link>
        </Col>
        <Col>
          <Link to="/bouquet-four">
            <Image src={bouquetFour} width={400} height={400} alt="Bouquet Four" thumbnail />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Bouquets;
