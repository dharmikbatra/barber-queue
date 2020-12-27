import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styles from './FirstContainer.module.css';

const FirstContainer = () => {
    return(
        <Container fluid className = {styles.container}>
            <Navbar bg='light'>
                <Navbar.Brand>Barber Queue</Navbar.Brand>
                <Navbar.Collapse className = 'justify-content-end'>
                    <Nav.Link>a</Nav.Link>
                    <Nav.Link>b</Nav.Link>
                    <Nav.Link>c</Nav.Link>
                    <Nav.Link>d</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <h1>Welcome!</h1>
            <p>ksjbfvksndvlskmdkl</p>
            
            <h4>First Time?</h4>
            <Button variant = 'light'>SignUp</Button>
            <h4>already a user?</h4>
            <Button variant = 'light'>SignIn</Button>
        </Container>

    );
}

export default FirstContainer;