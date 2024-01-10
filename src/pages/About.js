import React from 'react';
import './About.css';
import Imu from '../assets/imu.png';

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">Aquin Interactives</h2>
      <p className="paragraph about-para">
      Aquin Zone is a distinguished space highlighting Aquin Interactives' featured creations. Here, you'll discover a variety of applications by Aquin, each offering a glimpse into potentially exciting futures! Take the opportunity to explore them before they become collaborative endeavors or find their way into our main app. Don't miss out!
      </p>
      <button className="hire-me">
        <a href="https://aquin.app" target="_blank" rel="noreferrer">
          AquinV1.1
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Aquin Zone</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={Imu}
            alt=""
          />
          <p>AquinV1.1</p>
        </div>
        <div className="skill">
          <img
            src={Imu}
            alt=""
          />
          <p>Gamz</p>
        </div>
        <div className="skill">
          <img
            src={Imu}
            alt=""
          />
          <p>Interactives</p>
        </div>
        <div className="skill">
          <img
            src={Imu}
            alt=""
          />
          <p>Doc</p>
        </div>
      </div>
      <h2 className="skill-title">Gonna Make This:</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={Imu}
            alt=""
          />
          <p>Specific</p>
        </div>
        <div className="skill">
          <img
            src={Imu}
            alt=""
          />
          <p>Notz</p>
        </div>
        <div className="skill">
          <img
            src={Imu}
            alt=""
          />
          <p>XD</p>
        </div>
        <div className="skill">
          <img
            src={Imu}
            alt=""
          />
          <p>Infinity</p>
        </div>
        <div className="skill">
          <img
            src={Imu}
            alt=""
          />
          <p>Maim</p>
        </div>
      </div>
      <h2 className="skill-title">Aquin Collabs</h2>
      <div className="skills">
        <div className="skill">
        <svg width="50" height="50" viewBox="0 0 437 436" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M407.071 59.9192C407.071 76.4815 393.636 89.9173 377.052 89.9173C360.469 89.9173 347.034 76.4815 347.034 59.9192C347.034 43.3569 360.469 29.9211 377.052 29.9211C393.636 29.9211 407.071 43.3569 407.071 59.9192ZM71.0371 166.36C71.0371 182.922 57.6025 196.358 41.0185 196.358C24.4346 196.358 11 182.922 11 166.36C11 149.797 24.4346 136.362 41.0185 136.362C57.6025 136.362 71.0371 149.797 71.0371 166.36ZM306.89 395.79C306.89 411.917 293.809 425 277.661 425C261.512 425 248.431 411.917 248.431 395.79C248.431 379.663 261.512 366.581 277.661 366.581C293.809 366.581 306.89 379.663 306.89 395.79ZM426 197.895C426 265.144 390.466 324.116 337.092 357.047C324.434 337.684 302.551 324.872 277.659 324.872C243.117 324.872 214.335 349.546 208.004 382.234C131.872 369.541 71.2931 310.85 55.8444 235.727C87.9085 228.909 111.963 200.447 111.963 166.359C111.963 140.175 97.7716 117.327 76.6838 105.044C108.941 48.8345 169.561 11 239.007 11C265.816 11 291.285 16.6324 314.314 26.7718C309.072 36.6673 306.1 47.9543 306.1 59.9203C306.1 99.0937 337.871 130.841 377.05 130.841C389.023 130.841 400.318 127.869 410.22 122.627C420.365 145.644 426 171.1 426 197.895ZM239.007 248.317C267.296 248.317 290.237 225.395 290.237 197.108C290.237 168.82 267.296 145.898 239.007 145.898C210.719 145.898 187.778 168.82 187.778 197.108C187.778 225.395 210.719 248.317 239.007 248.317Z" stroke="#3A86FF" stroke-width="22"/>
        </svg>
          <p>StudyCrew</p>
        </div>
        <div className="skill">
          <img src={Imu} alt="" />
          <p>Carrot Cat</p>
        </div>
      </div>
      <h2 className="skill-title">Aquin Team</h2>
      <div className="skills">
        <p className="soft-skill">Friction(starter)</p>
        <p className="soft-skill">Speedy(gamer)</p>
        <p className="soft-skill">Pcannon(Dude)</p>
        <p className="soft-skill">Sambhav(cook)</p>
      </div>
      <br />
      <br />
      <br />
      <h2 className="skill-title">Aquin Contributors</h2>
      <div className="skills">
        <p className="soft-skill">ADumbPerson(dev)</p>
        <p className="soft-skill">abig0(dev)</p>
        <p className="soft-skill">kenny(dev)</p>
        <p className="soft-skill">Kiddu(dev)</p>
        <p className="soft-skill">kris4o(dev)</p>
        <p className="soft-skill">MoonKnight(dev)</p>
        <p className="soft-skill">Navya(dude)</p>
        <p className="soft-skill">yaboypau(discorder)</p>
      </div>
    </div>

  </section>
);

export default About;
