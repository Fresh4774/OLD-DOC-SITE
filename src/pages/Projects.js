import React, { useEffect } from 'react';
import './Projects.css';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../store/ProjectsSlice';
import ProjectCard from '../components/ProjectCard';
import Banner from '../assets/banner.png';
import t from '../assets/t.png';

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="projects" id="projects">
        <h1 className="title projects-title">Aquin Interactives</h1>
        <p className="projects-para">Don't wait, start trying them now!</p>
      <div className="projects-container">
        <ProjectCard image={t} title={"Aquin Terminal"} description={"Its coming faster than you think!"} source_link={"https://aquinterminal.vercel.app"} />

        <ProjectCard image={Banner} title={"Coming Soon!"} description={"Its coming faster than you think!"} source_link={"https://aquindoc.vercel.app"} />
      </div>
    </div>
    
  );
};

export default Projects;
