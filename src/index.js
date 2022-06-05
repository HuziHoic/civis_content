import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Navbar from './Components/Navbar';
import Quiz from './Components/Quiz';
import Loginpage from './Components/loginpage';
import Leaderboard from './Components/Leaderboard';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Registerpage from './Components/Registerpage';
import DiscussionForum from './Components/DiscussionForum';
import ReadnRespond2 from './Components/ReadnRespond2';
import Rewards from './Components/Rewards';
import Userprofile from './Components/Userprofile';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={ <App/>} />
      <Route path="/signup" element={ <Registerpage/>} />
      <Route path="/login" element={ <Loginpage />} />
      <Route path="/Leaderboard" element={ <Leaderboard />} />
      <Route path="/dforums" element={<Category />}/>
      <Route path="/rewards" element={<Rewards />}/>
      <Route path="/quiz" element={ <Quiz/>}/>
      <Route path="/profile" element={ <Userprofile/>}/>
      <Route path="/discussionforum" element={<DiscussionForum/>} />
      <Route path="/discuss/:category" element={<ReadnRespond2 />} />
    </Routes>
    {/*<Footer/>*/}
  </BrowserRouter>
);


