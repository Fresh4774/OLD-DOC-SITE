import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">This is Aquin Zone,</h2>
        <h3 className="tagline">Get ready to break pixels with this one 🔥</h3>
        <p className="paragraph">Aquin Zone showcases cutting-edge creations by Aquin Interactives. Explore these innovative applications for a sneak peek into exciting future developments before they become part of our main app or collaborations!</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://aquin.app" target="_blank" rel="noreferrer">
              AquinV1.1
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              Join Us.
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="prantosh" className="hero-image" />
    </div>
    <div className="social-icons">
        <a href="https://www.youtube.com/@Aquin470" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-youtube" />
        </a>
        <a href="https://twitter.com/itssAquin" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
        <a href="https://discord.gg/HfXbsufW9T" target="_blank" rel="noreferrer">
          <i className="fab fa-discord" />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-pinterest" />
        </a>
      </div>
  </div>
);

export default Hero;
