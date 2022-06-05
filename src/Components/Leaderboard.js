import React from 'react'
import Table from 'react-bootstrap/Table'
import './Leaderboard.css'

export default function Leaderboard() {
  return (<>
  <div className="bg">
  <div className="container">
    <Table striped bordered hover responsive>
    <thead>
        <tr>
        <th>Rank</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Points</th>
        <th>Badges</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>850</td>
        <td><img src="https://i.etsystatic.com/5145561/r/il/c3ab61/3548172693/il_fullxfull.3548172693_tsme.jpg" className="card-img-top" alt="" style={{width:"10%", height: "10%"}}/></td>
        </tr>
        <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>670</td>
        <td><img src="https://img.freepik.com/free-vector/number-one-leadership-business-golden-badge_1419-2081.jpg?w=2000" className="card-img-top" alt="" style={{width:"10%", height: "10%"}}/></td>
        </tr>
        <tr>
        <td>3</td>
        <td>Larry</td>
        <td>Twain</td>
        <td>510</td>
        <td><img src="https://ih1.redbubble.net/image.3127772595.4022/ur,pin_large_front,square,600x600.u1.jpg" className="card-img-top" alt="" style={{width:"10%", height: "10%"}}/></td>
        </tr>
        <tr>
        <td>4</td>
        <td>Rahul</td>
        <td>Kumar</td>
        <td>540</td>
        <td><img src="https://ih1.redbubble.net/image.3127772595.4022/ur,pin_large_front,square,600x600.u1.jpg" className="card-img-top" alt="" style={{width:"10%", height: "10%"}}/></td>
        </tr>
        <tr>
        <td>5</td>
        <td>Sakshi</td>
        <td>Raina</td>
        <td>120</td>
        <td><img src="https://juststickers.in/wp-content/uploads/2018/06/every-adventure-requires-a-first-step-badge.png" className="card-img-top" alt="" style={{width:"10%", height: "10%"}}/></td>
        </tr>

    </tbody>
    </Table>
    
  </div>
  </div>
  </>
  )
}
