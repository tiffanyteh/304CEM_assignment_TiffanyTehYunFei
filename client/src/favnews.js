import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Background from './img/background.jpg';
import $ from 'jquery';
import Card from 'react-bootstrap/Card';
import Linkify from 'react-linkify';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

//display favourite news data
class FavNews extends React.Component {

  constructor(props) {

    super(props);
  
  
    this.state = {
  
     title: "",
     url: "",
     description: "",
     date: "",
     source: "",
     image: ""

    }
  
   }  

   componentDidMount() {

    this.fetch();
  
   }

   fetch() {
    const queryParams = new URLSearchParams(window.location.search);
    const keyword = encodeURI(queryParams.get('title'));
    var context = this;
  
    $.ajax({
      
     url: `https://safe-sierra-77923.herokuapp.com/api/favnews?title=${keyword}`,
  
     method: 'GET',
  
     success: function(response) {
  
      context.setState({
  
          title: response.title,
          url: response.url,
          description: response.description,
          date: response.date,
          source: response.source,
          image: response.image
          
      });
  
     }
  
    });
  
   }

   renderElement(){
    if(this.state.description == null){
      return <div style={{display:"flex", justifyContent:"center"}}>
      <Card border="primary" style={{ width: '50rem' }}>
      <Card.Body>Description: No description found.</Card.Body>
      <br></br><br></br>
      <Button variant="primary" onClick={()=> window.location.href=`/editfav?title=${this.state.title}`}>Edit Description</Button>
      </Card>
      </div>;
    }
    else{
      return <div style={{display:"flex", justifyContent:"center"}}>
      <Card border="primary" style={{ width: '50rem' }}>
      <Card.Body>Description: {this.state.description}</Card.Body>
      <br></br><br></br>
      <Button variant="primary" onClick={()=> window.location.href=`/editfav?title=${this.state.title}`}>Edit Description</Button>
      </Card>
      </div>;
    }
 }
  
  render(){
    return (
      <div style={{
        background: `url(${Background})`,  backgroundSize: 'cover'
      }}>
        <div>
         <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="/">News Hub</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Navbar.Brand href="/favourite">Favourites</Navbar.Brand>
              <Nav.Link href="/history">History</Nav.Link>
              </Nav>
              </Container>
          </Navbar>
        </div>
        <br></br><br></br>
        <div style={{display:"flex", justifyContent:"center"}}>
          <Image src={this.state.image} width="500px"/>
        </div>
        <br></br>
        <div style={{display:"flex", justifyContent:"center"}}>
        <Card border="primary" style={{ width: '50rem' }}>
          <Card.Body>News Title: {this.state.title}</Card.Body>
        </Card>
        </div>
        <br></br>
        { this.renderElement() }
        <br></br>
        <div style={{display:"flex", justifyContent:"center"}}>
        <Card border="primary" style={{ width: '50rem' }}>
          <Card.Body>Date Published: {this.state.date}</Card.Body>
        </Card>
        </div>
        <br></br>
        <div style={{display:"flex", justifyContent:"center"}}>
        <Card border="primary" style={{ width: '50rem' }}>
          <Card.Body>Source: {this.state.source}</Card.Body>
        </Card>
        </div>
        <br></br>
        <div style={{display:"flex", justifyContent:"center"}}>
        <Card border="primary" style={{ width: '50rem' }}>
          <Card.Body>Link: &nbsp;
          <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.url}</Linkify>
          <br></br> <br></br>
          <Button variant="primary" onClick={()=> window.location.href=`/removefav?title=${this.state.title}`}>Remove Favourite</Button>
          </Card.Body>
        </Card>
        </div>
        <br></br>
        <br></br> <br></br>
      </div>
    );
  }
  
}
export default FavNews;