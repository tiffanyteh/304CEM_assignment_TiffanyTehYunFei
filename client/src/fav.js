import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Background from './img/background.jpg';
import $ from 'jquery';

//display successfully add to favourite message
class Fav extends React.Component {

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
    const queryParams = new URLSearchParams(window.location.search);
    const keyword = encodeURI(queryParams.get('title'));
    var context = this;
  
    $.ajax({
      
     url: `https://safe-sierra-77923.herokuapp.com/api/fav?title=${keyword}`,
  
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
      return <div><h4 style={{textAlign:"center"}}>Added to Favourites</h4>
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
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Nav.Link href="/favourite">Favourites</Nav.Link>
              <Nav.Link href="/history">History</Nav.Link>
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
export default Fav;