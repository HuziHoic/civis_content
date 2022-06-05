import React from 'react'
import './Userprofile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


export default function Userprofile() {
    return (
      <div className="UserPage">
        <div className="userdetails">
          <div className="userpic">
            <img
              className="useravatar"
              src="https://www.bootdey.com/img/Content/avatar/avatar7.png"
              alt="Profile Picture"
            />
            <br/>
            <br/>
            <br/>
            <div className="socialmedia">
                <div class="social-container">
      <h3>Share Profile</h3>
      <a href=""
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href=""
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>
            </div>

          </div>
          
          <div className="description">
            <div className="details">
              <ul>
                <li>
                  <p className="headings">Name:</p>
                  <p>Gokul Ramanan</p>
                </li>
                <li>
                  <p className="headings">Email:</p>
                  <p>gokulr5102@gmail.com</p>
                </li>
                <li>
                  <p className="headings">Age:</p>
                  <p>20</p>
                </li>
              </ul>
            </div>
            <div className="userRewards">
              <div className="points">

              <ul>
                <li>
                <p className="point">Points</p>
                <p className="point">750</p>
                </li>
                <li>
                <p className="point">Rank in City</p>
                <p className="point">1</p>
                </li>
                <li>
                <p className="point">Rank in State</p>
                <p className="point">10</p>
                </li>
                <li>
                <p className="point">Rank all over India</p>
                <p className="point">50</p>
                </li>
                <li>
                <p className="point">Best so far</p>
                <p className="point">#94</p>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
  
        <div className="wrapper">
        <br/>
        <br/>
          <h2>Badges</h2>
          <br/>
          <br/>
          <div className="badges">
            <div className="badgename">
              <h3>MARATHONER</h3>
              <img
                src="https://www.graphicsprings.com/filestorage/stencils/c6eba7224b5cd16c54c6d26e55397ae6.png?width=500&height=500"
                className="card-img-top"
                alt=""
              />
            </div>
  
            <div className="badgename">
              <h3>WEEKEND WARRIOR</h3>
              <img
                src="https://yt3.ggpht.com/ytc/AKedOLTeD0NeWluZQBwAchoUa2vAvrm21UqCIMYBg-L26g=s900-c-k-c0x00ffffff-no-rj"
                className="card-img-top"
                alt=""
              />
            </div>
  
            <div className="badgename">
              <h3>OVERSHARE</h3>
              <img
                src="https://ih1.redbubble.net/image.3127772595.4022/ur,pin_large_front,square,600x600.u1.jpg"
                className="card-img-top"
                alt=""
              />
            </div>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
  