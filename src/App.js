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
  height: 50vh;
  background-image: url(${background});
  position: absolute;
  left: 0;
  right: 0;
`

const RedContainer = styled(Container)`
  color: darkred;
  margin: auto;
`
const BlueContainer = styled(Container)`
  color: darkblue;
  margin: auto
`

const StylishContainer = styled(BlueContainer)`
  font-size: 1.5em;
  margin-top: 0.5em
`

const StyledRow = styled(Row)`
  border-radius: 0.5em;
  background-color: lightgreen;
  padding: 10px
`

const StyledCol = styled(Col)`
  border-radius: 0.5em;
  background-color: seagreen;
  padding: 10px;
  text-align: center;
  outline: 2px solid darkgreen
`


function App() {
  return (
    <><Navbar bg={"light"} expand="lg" sticky = "top">
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
        <StyledRow>
          <StyledCol><h1>Welcome to the store</h1></StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol>Cool Stuff 1</StyledCol>
          <StyledCol>Another Column</StyledCol>
          <StyledCol>You guessed it, another Column</StyledCol>
        </StyledRow>
        <Row>
          <Col>
            <RedContainer>
              <StyledRow>
                <StyledCol>Item 1</StyledCol>
                <StyledCol>Item 2</StyledCol>
                <StyledCol>Item 3</StyledCol>
              </StyledRow>
            </RedContainer>
          </Col>
        </Row>
        <Row>
          <Col>
            <StylishContainer>
              <StyledRow>
                <StyledCol>Column 1</StyledCol>
                <StyledCol>Column 2</StyledCol>
              </StyledRow>
            </StylishContainer>
          </Col>
        </Row>
      </Container>
    </Splash>
    
    </>    
  );
}

export default App;
