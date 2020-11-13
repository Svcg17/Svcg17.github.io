import React from 'react'
import AllProjects from '../assets/data/projects.json'
import DailyRecipe from '../assets/DailyRecipe.jpg'
import ImBored from '../assets/ImBored.png'
import AirbnbClone from '../assets/AirbnbClone.png'
import '../styles/projects.scss'

const images = {
  'Daily Recipe': DailyRecipe,
  "I'm Bored": ImBored,
  'Airbnb Clone': AirbnbClone,
}

const Card = ({ project }) => {
  return (
    <div className='card'>
      <section className='cardBody'>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        {images[project.name] && <img src={images[project.name]} alt={`${project.name} example`} />}
      </section>
      <section className='cardSide'>
        <h4>Technologies</h4>
        <ul>
          {project.technologies.map(val => (<li>{val}</li>))} 
        </ul>
        <a className='button' href={project.link}>Visit Project</a>
      </section>
    </div>
  )
}

const Projects = () => {
  return (
    <section id='projects'>
      <h1>My Personal Projects</h1>
      {AllProjects.map(p => (
        <Card project={p}/>
      ))}
    </section>
  )
}

export default Projects
