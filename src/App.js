import './App.css';
import Navbar from'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import instaCartLogo from './instacart-logo.svg';
import background from './background.webp';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from "styled-components";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Splash = styled.div`
  width: 100vw;
  height: 100vh  ;
  background-image: url(${background})
`

const RedContainer = styled(Container)`
  color: red;
`

function App() {
  return (
    <><Navbar bg={"light"} expand="lg" fixed = "top">
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img src={instaCartLogo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>{' '}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Splash>
      <Container>
        <Row>
          <Col><h1>Welcome to the store</h1></Col>
        </Row>
        <Row>
          <Col>Cool Stuff 1</Col>
          <Col>Another Column</Col>
          <Col>You guessed it, another Column</Col>
        </Row>
        <Row>
          <Col>
            <RedContainer>
              <Row>
                <Col>This should be red</Col>
              </Row>
            </RedContainer>
          </Col>
        </Row>
      </Container>
    </Splash>
    
    </>    
  );
}

export default App;
