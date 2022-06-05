import React , {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';  
import DiscussionForum from './DiscussionForum';

function Category() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
                 <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Go somewhere</Button>
                  </Card.Body>
                </Card>
        

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Categories</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <a href="#">MOTOR VEHICLES</a>
          </Offcanvas.Body>
          <Offcanvas.Body>
            ELECTRIC VEHICLES
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default Category;