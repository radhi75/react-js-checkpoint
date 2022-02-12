import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import About from "./Component/about/about";

import Intro from "./Component/intro";
import Contact from "./Component/contact/contact";

function App() {
  return (
    <section id="head">
      <div className="App">
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      </div>
      <div>
        <Intro />
        <About />
        <Contact />
      </div>
    </section>
  );
}

export default App;
