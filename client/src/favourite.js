import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Background from './img/background.jpg';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Linkify from 'react-linkify';
import $ from 'jquery';

//favourites page
class Favourite extends React.Component {
  
  constructor(props) {

    super(props);
  
  
    this.state = {
        docs: []

    }
  
   }  

   componentDidMount() {

    this.fetch();
  
   }

   fetch() {
    
    var context = this;
    
  
    $.ajax({
      
     url: `https://safe-sierra-77923.herokuapp.com/api/favourite`,
  
     method: 'GET',
  
     success: function(response) {
  
      context.setState({
        docs: response.docs
          
      });
  
     }
  
    });
  
   }

   renderElement(){
    if(this.state.docs==""){
      return <div><h4 style={{textAlign:"center"}}>No Favourites Found</h4>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>;
    }
    else{
        
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
        <div >
        <h3 style={{textAlign:"center"}}>Favourite News</h3>
        </div>
        <br></br>
        { this.renderElement() }
        {this.state.docs.map(doc => (
            <div>
            <div style={{display:"flex", justifyContent:"center"}} key={doc.favotitle}>
            <Card style={{ width: '35rem' }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>{doc.favotitle}</Card.Title>
              <Card.Text>
              <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{doc.favourl}</Linkify>
              </Card.Text>
              <Button variant="primary" onClick={()=> window.location.href=`/favnews?title=${doc.favotitle}`}>Read More</Button>
            </Card.Body>
            </Card>
          </div>
          <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
          ))}
        <br></br>
    </div>
    );
  }
  
}
export default Favourite;