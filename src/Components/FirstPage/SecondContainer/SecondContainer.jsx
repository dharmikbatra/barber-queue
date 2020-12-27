import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './SecondContainer.module.css'

const SecondContainer = () => {
    return(
        <Container fluid className = {styles.container}>
            <Row>
                <Col>Easy to use.</Col>
                <Col>Saves you time and money.</Col>
                <Col>only select the best.</Col>
            </Row>
        </Container>
    );

}

export default SecondContainer;