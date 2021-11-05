import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Background from './img/background.jpg';
import $ from 'jquery';

//display succesfully remove all history
class RemoveHistory extends React.Component {

  constructor(props) {

    super(props);
  
  
    this.state = {
  
     temp1: ""

    }
  
   }  

   componentDidMount() {

    this.fetch();
  
   }

   fetch() {
    var context = this;
  
    $.ajax({
      
     url: `https://safe-sierra-77923.herokuapp.com/api/removehistory`,
  
     method: 'GET',
  
     success: function(response) {
  
      context.setState({
  
          temp1: response.temp1
          
      });
  
     }
  
    });
  
   }

   renderElement(){
    if(this.state.temp1 == null){
      return <div><h4 style={{textAlign:"center"}}>Search History Cleared</h4>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>;
    }
    else{
      return 0;
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
        { this.renderElement() }
        <br></br>
        <br></br>
        <br></br> <br></br>
      </div>
    );
  }
  
}
export default RemoveHistory;