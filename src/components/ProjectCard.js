import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => (
  <a className="project-card" href={props.source_link} target='_blank'>
    <i className="fa-regular fa-arrow-up-right" />
    <img src={props.image} alt="" />
    <div className="card-description">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  </a>
);

export default ProjectCard;
