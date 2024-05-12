import React from 'react';
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
          <Image src={bouquetOne} width={400} height={400} alt="Bouquet One" thumbnail />
        </Col>
        <Col>
          <Image src={bouquetTwo} width={400} height={400} alt="Bouquet Two" thumbnail />
        </Col>
        <Col>
          <Image src={bouquetThree} width={400} height={1200} alt="Bouquet Three" thumbnail />
        </Col>
        <Col>
          <Image src={bouquetFour} width={400} height={400} alt="Bouquet Four" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Bouquets;

