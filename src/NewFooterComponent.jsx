import  { Component } from "react";
import './NewFooterComponent.css';
import img1 from './assets/fb.webp'
import img2 from './assets/insta.jpg'
import img3 from './assets/yt.png'

class NewFooterComponent extends Component {
  render() {
    return (
      <div className="glass">
        <footer className="footer-area ">
          <div className="footer-wave-box">
            <div className="footer-wave footer-animation"></div>
          </div>
          <div className="main">
            <div className="footer">
              <div className="single-footer">
                <h4>about us</h4>
                <div className="footer-social">
                  <a href="https://www.facebook.com/sae.mmmut?ref=embed_page">
                    
                    <img src={img1} alt="facebook" className="fb1" />
                  </a>
                  <a href="https://www.instagram.com/sae_collegiate_club_mmmut/">
                    
                    <img src={img2} alt="facebook" className="fb1" />
                  </a>
                  <a href="https://www.youtube.com/@sae_collegiate_club_mmmut">
                    
                    <img src={img3} alt="facebook" className="fb1" />
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="single-footer">
                <h4>Contact us</h4>
                <div className="footer-social-2">
                  <ul>
                    <li><a href=""><i className="fas fa-map-marker-alt"></i> Singhariya, Kunraghat, Gorakhpur, Uttar Pradesh 273010</a></li>
                    <li><a href=""><i className="fas fa-envelope"></i> sae@mmmut</a></li>
                    <li><a href=""><i className="fas fa-globe-europe"></i> www.saemmmut.in</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copy">
            <p className="end1">&copy; 2020 all rights reserved</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default NewFooterComponent;
