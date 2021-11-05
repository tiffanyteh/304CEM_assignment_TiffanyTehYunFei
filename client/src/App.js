import React from 'react';
import $ from 'jquery';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "./img/news1.jpg";
import image1 from "./img/news2.png";
import Carousel from 'react-bootstrap/Carousel';
import { MDBCol } from "mdbreact";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Linkify from 'react-linkify';
import Background from './img/background.jpg';

//home page of the news website 
class App extends React.Component {

 constructor(props) {

  super(props);


  this.state = {

   newstitle: "",
   link: "",
   newstitle1: "",
   newstitle2: "",
   newstitle3: "",
   link1: "",
   link2: "",
   link3: ""
  }

 }



 componentDidMount() {

  this.fetch();

 }



 fetch() {

  var context = this;



  $.ajax({

   url: 'https://safe-sierra-77923.herokuapp.com/api/home',

   method: 'GET',

   success: function(response) {

    context.setState({

        newstitle: response.newstitle,
        link: response.link,
        newstitle1: response.newstitle1,
        newstitle2: response.newstitle2,
        newstitle3: response.newstitle3,
        link1: response.link1,
        link2: response.link2,
        link3: response.link3
    });

   }

  });

 }



 render() {
   
  return (
    <div style={{
        background: `url(${Background})`,  backgroundSize: 'cover'
      }}>
        <div>
       <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">News Hub</Navbar.Brand>
            <Nav className="me-auto">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav.Link href="/favourite">Favourites</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
      </div>
      <div>
       <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image}
            alt="First slide"
            width="100px"
            height="500px"
            />
            <Carousel.Caption>
            <h3>Latest News</h3>
            <p>Search for latest news daily.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image1}
            alt="Second slide"
            width="100px"
            height="500px"
            />

            <Carousel.Caption>
            <h3>Search News</h3>
            <p>Read news daily and search for latest news.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
       </div>
       <br></br><br></br>
       <div>
           <h3 style={{textAlign:"center"}}>Featured News</h3>
       </div>
       <br></br>
       <div style={{display:"flex", justifyContent:"center"}}>
          
       <MDBCol md="5">
       <form action="/search" method="get" style={{display:"flex", justifyContent:"center"}}>
      <input className="form-control" type="text" placeholder="Search News" aria-label="Search" name="s"
        />
        <br></br>
        <Button variant="primary" type="submit" style={{width:"100px", marginLeft:"15px"}} >Search</Button>
        </form>
        </MDBCol>
       </div>
       <br></br><br></br>
       <div style={{display:"flex", justifyContent:"center"}}>
       <Card style={{ width: '35rem' }}>
        <Card.Header>External</Card.Header>
        <Card.Body>
            <Card.Title>{this.state.newstitle}</Card.Title>
            <Card.Text>
            <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.link}</Linkify>
            </Card.Text>
        </Card.Body>
        </Card>
       </div>
       <br></br>
       <div style={{display:"flex", justifyContent:"center"}}>
       <Card style={{ width: '35rem' }}>
        <Card.Header>External</Card.Header>
        <Card.Body>
            <Card.Title>{this.state.newstitle1}</Card.Title>
            <Card.Text>
            <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.link1}</Linkify>
            </Card.Text>
        </Card.Body>
        </Card>
       </div>
       <br></br>
       <div style={{display:"flex", justifyContent:"center"}}>
       <Card style={{ width: '35rem' }}>
        <Card.Header>External</Card.Header>
        <Card.Body>
            <Card.Title>{this.state.newstitle2}</Card.Title>
            <Card.Text>
            <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.link2}</Linkify>
            </Card.Text>
        </Card.Body>
        </Card>
       </div>
       <br></br>
       <div style={{display:"flex", justifyContent:"center"}}>
       <Card style={{ width: '35rem' }}>
        <Card.Header>External</Card.Header>
        <Card.Body>
            <Card.Title>{this.state.newstitle3}</Card.Title>
            <Card.Text>
            <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.link3}</Linkify>
            </Card.Text>
        </Card.Body>
        </Card>
       </div>
       <br></br><br></br>
    </div>
  );

 }
 
}
export default App;
