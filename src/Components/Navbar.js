import React, {useEffect} from 'react'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import {useState} from 'react';



export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }


  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return (
    <>
    <Nav className="navbar" activeKey="/home">
        <Nav.Item className='civislogo'>
        <Nav.Link className="quiz" href="/">
        <img src="https://cdn.dribbble.com/users/897679/screenshots/13214451/civis_logotype_4x.png" className="civispic" alt="The Civis Logo"/>
        </Nav.Link>
        </Nav.Item>
        <ul className='navitems'>
        <Nav.Item className="navitem">
            <Nav.Link className="navlink" href="/quiz">Weekly Quiz</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navitem">
            <Nav.Link className="navlink" href="/discussionforum">Discussion Forum</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navitem">
            <Nav.Link className="navlink" href="/leaderboard">Leaderboard</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navitem">
            <Nav.Link className="navlink" href="/rewards">Rewards</Nav.Link>
        </Nav.Item>
        {
            localStorage.getItem("name")!=NULL?(<Nav.Item className="navitem">
            <Nav.Link className="navlink" href="/profile">Profile</Nav.Link>
        </Nav.Item>):(
            <Nav.Item className="navitem">
            <Nav.Link className="navlink" href="/login">Login/Sign-Up</Nav.Link>
        </Nav.Item>
        )
        }
       
        
        </ul>
    </Nav>
    </>
  )
}
