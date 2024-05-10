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
      <Row>

      <Col xs={6} md={4}>
          <Image src={bouquetOne} alt="Bouquet One" thumbnail />
        </Col>

        <Col xs={6} md={4}>
          <Image src={bouquetTwo} alt="Bouquet Two" thumbnail />
        </Col>

        <Col xs={6} md={4}>
          <Image src={bouquetThree} alt="Bouquet Three" thumbnail />
        </Col>

        <Col xs={6} md={4}>
          <Image src={bouquetFour} alt="Bouquet Four" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Bouquets;













