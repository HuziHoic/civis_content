import React from 'react'
import './Footer.css'
import 'font-awesome/css/font-awesome.min.css'


const Footer = () => {
  return (
    <div className="footer">
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-3 item">
                    <h5>Policies</h5>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Content Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                    <h5>About</h5>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-6 item text">
                    <h3 className='compname'>Civis</h3>
                    <p className='para'>In India, you are the superhero of the country, and the guardian of our destiny.
                    Laws meant for you and I can be shaped by people like you and I.
                    The process where you share feedback with the government on how a policy may impact you and your community, is known as a public consultation.</p>
                </div>
                <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
            </div>
            <p className="copyright">Civis © 2022</p>
        </div>
    </footer>
</div>
  )
}

export default Footer