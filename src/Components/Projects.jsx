import React from 'react'
import netflixImg from './images/netflix-project.png'
import productImg from './images/project.png'
import dishImg from './images/image.png'

const projectArray = [
  {
    img: netflixImg,
    imgAlt: 'Netflix Clone',
    name: 'Netflix Home Page Clone',
    description: 'Created a responsive Netflix home page clone.',
    liveDemo: 'https://balajisudarshan.github.io/netflix-home-page-clone/',
    github: 'https://github.com/balajisudarshan/netflix-home-page-clone'
  },
  {
    img: productImg,
    imgAlt: 'React Product Page',
    name: 'React Product Page',
    description: 'Created a responsive React product page with API integration.',
    liveDemo: 'https://e-com-product-page-243xed1t2-balajisudarshans-projects.vercel.app/',
    github: 'https://github.com/balajisudarshan/EComProduct'
  },
  {
    img: dishImg,
    imgAlt: 'DishCoveryy',
    name: 'DishCoveryy',
    description: 'Fully functional MERN stack website for finding recipes.',
    liveDemo:'https://dishcoveryy.vercel.app/',
    // github: 'https://github.com/balajisudarshan/DishCoveryy'
  }
]

const Projects = () => {
  return (
    <section className='bg-base-200 py-20 px-5 lg:px-32 '>
      <h2 className='text-4xl text-accent font-bold text-center mb-12'>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectArray.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <figure>
              <img src={project.img} alt={project.imgAlt} className="w-full h-48 object-cover"/>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl">{project.name}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="card-actions mt-4 justify-start">
                <a href={project.liveDemo} target="_blank" className="btn btn-primary btn-sm">Live Demo</a>
                {project.github && (
                  <a href={project.github} target="_blank" className="btn btn-secondary btn-sm">GitHub</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
