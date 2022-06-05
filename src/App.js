import React , {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel , Button, Card, Table, Dropdown } from 'react-bootstrap';
import './App.css';
import { Link } from "react-router-dom";



function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <div>
      <Carousel>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh3.googleusercontent.com/BNc3ZwaZnzPu3hWCGxfUZ_jVpNTo2bMRizd1wqpLYD6CqdD43TXMrCOi8SU5ya18qMngSNBRyxjwBdi1JB57z2b720WwwkHRfhUuQrIL9Uu7rWjBejcgReUbuKlq7oVilQoVmP_0"
      alt="First slide"
      width="640" height="500"
    />
    <Carousel.Caption>
      <h3 className="heading">Express</h3>
      <p className="desc">You being the most crucial part of the country own the right to voice out your opinion on the laws which are going to impact you. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://blog.ipleaders.in/wp-content/uploads/2020/07/11.jpg"
      alt="Second slide"
      width="640" height="500"
    />

    <Carousel.Caption>
      <h3 className="heading">Debate</h3>
      <p className="desc">For every comment you put, every vote and share your comment gets, every referral you make, all is being counted. You have a joining bonus too. Comeon, get going Law Approvers!!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://blog.ipleaders.in/wp-content/uploads/2020/08/O-17.jpg"
      alt="Third slide"
      width="640" height="500"
    />

    <Carousel.Caption>
      <h3 className="heading">Change</h3>
      <p className="desc">Get started with the law that best catches your attention and give your feedback on the same.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="scroll">

<Offcanvas show={show} onHide={handleClose} style={{backgroundColor:"rgb(107, 244, 244)"}}>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Categories</Offcanvas.Title>
  </Offcanvas.Header>

          <Offcanvas.Body>
          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
              Motor Vehicle Policies
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item><Link to={`/discuss/1`}>Draft Central Motor Vehicles Rules, 2021</Link></Dropdown.Item>
            <Dropdown.Item><Link to={`/discuss/2}`}>Draft Motor Third Party Premium Liability Rules</Link></Dropdown.Item>
            <Dropdown.Item><Link to={`/discuss/3`}>Vehicle Scrapping Facility Amendment</Link></Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>


          <Offcanvas.Body>
          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          Food Safety and Standards
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item><Link to={`/discuss/4`}>Draft Food Safety and Standards</Link></Dropdown.Item>
            <Dropdown.Item><Link to={`/discuss/5`}>Food products Standards and Food Additives</Link></Dropdown.Item>
            <Dropdown.Item><Link to={`/discuss/6`}>Labelling and Display Regulations, 2021</Link></Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
          </Offcanvas.Body>

          <Offcanvas.Body>
          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          Electric Vehicle Policies
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item><Link to={`/discuss/7`}>Draft Battery Swapping Policy</Link></Dropdown.Item>
            <Dropdown.Item><Link to={`/discuss/8`}>Central Electricity Authority</Link></Dropdown.Item>
            <Dropdown.Item><Link to={`/discuss/9`}>Haryana Charging Infrastructure</Link></Dropdown.Item>
          </Dropdown.Menu>

          </Dropdown>
          </Offcanvas.Body>
        </Offcanvas>
        </div>



<div className="bg">
  <br/><br/>
  <center><Button variant="success" onClick={handleShow} style={{width:300}}>Click here to see all Categories of laws!</Button></center>

<center><h1 className="my-5">Our Reward System</h1></center>
  <div className="container">
  <div className="row">
  <div className="column">
  <Card style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  padding: "16px",
  textAlign: "center",
  backgroundColor: "#f1f1f1" }}>
    <Card.Body>
      <Card.Title>Quiz</Card.Title>
      <Card.Text>
        Take quizzes on different laws and all facts pertaining to them and increase your points!
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  <div className="column">
  <Card style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  padding: "16px",
  textAlign: "center",
  backgroundColor: "#f1f1f1" }}>
    <Card.Body>
      <Card.Title>Discussion Forum</Card.Title>
      <Card.Text>
        Post your views on the discussion forum to earn more points!
        <br/>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  <div className="column">
  <Card style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  padding: "16px",
  textAlign: "center",
  backgroundColor: "#f1f1f1"}}>
    <Card.Body>
      <Card.Title>Sharing</Card.Title>
      <Card.Text>
        Share on social media platforms such as Facebook, Twitter and Whatsapp!
      </Card.Text>
    </Card.Body>
  </Card>
</div>
<div className="column">
  <Card style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  padding: "16px",
  textAlign: "center",
  backgroundColor: "#f1f1f1" }}>
    <Card.Body>
      <Card.Title>Referral</Card.Title>
      <Card.Text>
        Refer your friends to share their views on trending topics and earn points!
      </Card.Text>
    </Card.Body>
  </Card>
</div>

  </div>
</div>
<br/>
<br/>

<div className="container">
<center><h1 className="my-5">LEADERBOARD</h1></center>

<Table striped bordered hover responsive>
    <thead>
        <tr>
        <th>Rank</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Points</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>300</td>
        </tr>
        <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>210</td>
        </tr>
        <tr>
        <td>3</td>
        <td>Larry</td>
        <td>Twain</td>
        <td>150</td>
        </tr>
    </tbody>
    <div className='space'>
    </div>
    </Table>
  </div>

  <br/>
  <br/>
  <br/>
  </div>
  </div>
  </>
)};

export default App;

