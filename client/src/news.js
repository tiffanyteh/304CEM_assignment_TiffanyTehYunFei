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

//news page
class News extends React.Component {

  constructor(props) {

    super(props);
  
  
    this.state = {
  
     title: "",
     url: "",
     description: "",
     date: "",
     source: "",
     image: "",
     temp2: ""

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
      
     url: `https://safe-sierra-77923.herokuapp.com/api/news?title=${keyword}`,
  
     method: 'GET',
  
     success: function(response) {
  
      context.setState({
  
          title: response.title,
          url: response.url,
          description: response.description,
          date: response.date,
          source: response.source,
          image: response.image,
          temp2: response.temp2
          
      });
  
     }
  
    });
  
   }

   renderElement(){
    if(this.state.description == null){
      return <Card border="primary" style={{ width: '50rem' }}>
      <Card.Body>Description: No description found.</Card.Body>
      </Card>;
    }
    else{
      return <Card border="primary" style={{ width: '50rem' }}>
      <Card.Body>Description: {this.state.description}</Card.Body>
      </Card>;
    }
 }

 renderElement1(){
   if(this.state.temp2 === "Favourite"){
    return <Button variant="primary" onClick={()=> window.location.href=`/fav?title=${this.state.title}`}>Favourite</Button>;
   }
   else{
     return <Button variant="primary" onClick={()=> window.location.href=`/removefav?title=${this.state.title}`}>Remove Favourite</Button>;
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
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Nav.Link href="/favourite">Favourites</Nav.Link>
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
        <div style={{display:"flex", justifyContent:"center"}}>
        { this.renderElement() }
        </div>
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
          { this.renderElement1() }
          </Card.Body>
        </Card>
        </div>
        <br></br>
        <br></br> <br></br>
       
      </div>
    );
  }
  
}
export default News;