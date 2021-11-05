import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Background from './img/background.jpg';
import $ from 'jquery';
import Button from 'react-bootstrap/Button';

//edit favourite page
class EditFav extends React.Component {

  constructor(props) {

    super(props);
  
  
    this.state = {
  
     title: ""

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
      
     url: `https://safe-sierra-77923.herokuapp.com/api/editfav?title=${keyword}`,
  
     method: 'GET',
  
     success: function(response) {
  
      context.setState({
  
        title: response.title
          
      });
  
     }
  
    });
  
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
        <h3 style={{textAlign:"center"}}>Edit Description</h3>
        </div>
        <br></br><br></br>
        <div style={{display:"flex", justifyContent:"center"}}>
        <form action="/edit" method="get">
        <textarea name="d" style={{width:"500px", height:"200px", marginLeft:"15px", paddingLeft:"15px", paddingTop:"15px"}}
        placeholder="Enter Description"></textarea>
        <input type="hidden" name="t" value={ this.state.title } />  
        <br></br>
        <Button variant="primary" type="submit" style={{width:"500px", marginLeft:"15px"}} >Submit</Button>
        </form>
        </div>
        <br></br> <br></br><br></br> <br></br><br></br> <br></br>
        <br></br> <br></br><br></br> <br></br><br></br> <br></br>
      </div>
    );
  }
  
}
export default EditFav;