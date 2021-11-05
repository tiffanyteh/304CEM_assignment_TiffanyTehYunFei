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

//history page
class History extends React.Component {
  
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
      
     url: `https://safe-sierra-77923.herokuapp.com/api/history`,
  
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
      return <div><h4 style={{textAlign:"center"}}>No Search History Found</h4>
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
                  <Nav.Link href="/favourite">Favourites</Nav.Link>
                  <Navbar.Brand href="/history">History</Navbar.Brand>
                  </Nav>
                  </Container>
              </Navbar>
            </div>
            <br></br><br></br>
            <div>
            <h3 style={{textAlign:"center"}}>Search History</h3>
            </div>
            <br></br>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Button variant="primary" onClick={()=> window.location.href=`/removehistory`}>Clear History</Button>
            </div>
            <br></br>
            { this.renderElement() }
            {this.state.docs.map(doc => (
                <div>
                <div style={{display:"flex", justifyContent:"center"}} key={doc.titlenews}>
                <Card style={{ width: '35rem' }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{doc.titlenews}</Card.Title>
                  <Card.Text>
                  <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{doc.linknews}</Linkify>
                  </Card.Text>
                  <Button variant="primary" onClick={()=> window.location.href=`/news?title=${doc.titlenews}`}>Read More</Button>
                </Card.Body>
                </Card>
              </div>
              <br></br>
              </div>
              ))}
            <br></br>
        </div>
    );
  }
  
}
export default History;