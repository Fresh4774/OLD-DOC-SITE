import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        Aquin,
        {' '}
        something
        {' '}
        <br />
        cool &
        <br />
        {' '}
        insane ⚡️
      </h1>
    </div>
    <div className="footer-right">
      <h3>Aquin Team</h3>
      <div className="interests">
        <p>Friction(starter)</p>
        <p>Speedy(gamer)</p>
        <p>Pcannon(dude)</p>
        <p>Sambhav(cook)</p>
      </div>

      <hr />

      <h3>
        WANNA JOIN US?
        <span><a href="https://discord.gg/HfXbsufW9T">Contact Us</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://discord.gg/HfXbsufW9T" target="_blank" rel="noreferrer">COMMUNITY</a></span>
        <span>
          {' '}
          <a href="https://www.youtube.com/@Aquin470" target="_blank" rel="noreferrer">YOUTUBE</a>
        </span>
        <span>
          {' '}
          <a href="https://twitter.com/itssAquin" target="_blank" rel="noreferrer">X</a>
        </span>
        <span><a href="mailto:aquin.explore@gmail.com" target="_blank" rel="noreferrer">MAIL</a></span>
      </div>
    </div>
  </div>
);

export default Contact;
