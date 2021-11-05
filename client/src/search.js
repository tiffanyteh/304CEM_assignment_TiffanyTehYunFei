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

//search page
class Search extends React.Component {
  
  constructor(props) {

    super(props);
  
  
    this.state = {
  
     keyword: "",
     searchlink: "",
     keyword1: "",
     searchlink1: "",
     keyword2: "",
     searchlink2: "",
     keyword3: "",
     searchlink3: "",
     keyword4: "",
     searchlink4: "",
     keyword5: "",
     searchlink5: "",
     keyword6: "",
     searchlink6: "",
     keyword7: "",
     searchlink7: "",
     keyword8: "",
     searchlink8: "",
     keyword9: "",
     searchlink9: ""

    }
  
   }  

   componentDidMount() {

    this.fetch();
  
   }

   fetch() {
    //get parameter from url
    const queryParams = new URLSearchParams(window.location.search);
    const keyword = encodeURI(queryParams.get('s'));
    var context = this;
    
  
    $.ajax({
      
     url: `https://safe-sierra-77923.herokuapp.com/api/search?s=${keyword}`,
  
     method: 'GET',
  
     success: function(response) {
  
      context.setState({
  
          keyword: response.keyword,
          searchlink: response.searchlink,
          keyword1: response.keyword1,
          searchlink1: response.searchlink1,
          keyword2: response.keyword2,
          searchlink2: response.searchlink2,
          keyword3: response.keyword3,
          searchlink3: response.searchlink3,
          keyword4: response.keyword4,
          searchlink4: response.searchlink4,
          keyword5: response.keyword5,
          searchlink5: response.searchlink5,
          keyword6: response.keyword6,
          searchlink6: response.searchlink6,
          keyword7: response.keyword7,
          searchlink7: response.searchlink7,
          keyword8: response.keyword8,
          searchlink8: response.searchlink8,
          keyword9: response.keyword9,
          searchlink9: response.searchlink9
      });
  
     }
  
    });
  
   }

   renderElement(){
    if(this.state.keyword == null && this.state.searchlink == null){
      return <div><h4 style={{textAlign:"center"}}>No Results Found</h4>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>;
    }
    else{
      return <div><div style={{display:"flex", justifyContent:"center"}}>
      <Card style={{ width: '35rem' }}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
          <Card.Title>{this.state.keyword}</Card.Title>
          <Card.Text>
          <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink}</Linkify>
          </Card.Text>
          <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword}`}>Read More</Button>
      </Card.Body>
      </Card>
   </div>
   <br></br>
   <div style={{display:"flex", justifyContent:"center"}}>
   <Card style={{ width: '35rem' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>{this.state.keyword1}</Card.Title>
        <Card.Text>
        <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink1}</Linkify>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword1}`}>Read More</Button>
    </Card.Body>
    </Card>
   </div>
   <br></br>
   <div style={{display:"flex", justifyContent:"center"}}>
   <Card style={{ width: '35rem' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>{this.state.keyword2}</Card.Title>
        <Card.Text>
        <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink2}</Linkify>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword2}`}>Read More</Button>
    </Card.Body>
    </Card>
   </div>
   <br></br>
   <div style={{display:"flex", justifyContent:"center"}}>
   <Card style={{ width: '35rem' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>{this.state.keyword3}</Card.Title>
        <Card.Text>
        <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink3}</Linkify>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword3}`}>Read More</Button>
    </Card.Body>
    </Card>
   </div>
   <br></br>
   <div style={{display:"flex", justifyContent:"center"}}>
   <Card style={{ width: '35rem' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>{this.state.keyword4}</Card.Title>
        <Card.Text>
        <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink4}</Linkify>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword4}`}>Read More</Button>
    </Card.Body>
    </Card>
   </div>
   <br></br>
   <div style={{display:"flex", justifyContent:"center"}}>
   <Card style={{ width: '35rem' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>{this.state.keyword5}</Card.Title>
        <Card.Text>
        <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink5}</Linkify>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword5}`}>Read More</Button>
    </Card.Body>
    </Card>
   </div>
   <br></br>
   <div style={{display:"flex", justifyContent:"center"}}>
   <Card style={{ width: '35rem' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>{this.state.keyword6}</Card.Title>
        <Card.Text>
        <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink6}</Linkify>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword6}`}>Read More</Button>
    </Card.Body>
    </Card>
   </div>
   <br></br>
   <div style={{display:"flex", justifyContent:"center"}}>
   <Card style={{ width: '35rem' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>{this.state.keyword7}</Card.Title>
        <Card.Text>
        <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink7}</Linkify>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword7}`}>Read More</Button>
    </Card.Body>
    </Card>
   </div>
   <br></br>
   <div style={{display:"flex", justifyContent:"center"}}>
   <Card style={{ width: '35rem' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>{this.state.keyword8}</Card.Title>
        <Card.Text>
        <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink8}</Linkify>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword8}`}>Read More</Button>
    </Card.Body>
    </Card>
   </div>
   <br></br>
   <div style={{display:"flex", justifyContent:"center"}}>
   <Card style={{ width: '35rem' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>{this.state.keyword9}</Card.Title>
        <Card.Text>
        <Linkify properties={{ target: '_blank', style: { color: 'blue' } }}>{this.state.searchlink9}</Linkify>
        </Card.Text>
        <Button variant="primary" onClick={()=> window.location.href=`/news?title=${this.state.keyword9}`}>Read More</Button>
    </Card.Body>
    </Card>
   </div>
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
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Nav.Link href="/favourite">Favourites</Nav.Link>
              <Nav.Link href="/history">History</Nav.Link>
              </Nav>
              </Container>
          </Navbar>
        </div>
        <br></br><br></br>
        <div >
        <h3 style={{textAlign:"center"}}>Top 10 Relevant Search Results</h3>
        </div>
        <br></br>
        { this.renderElement() }
         <br></br>
      </div>
    );
  }
  
}
export default Search;