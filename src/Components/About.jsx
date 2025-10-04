import React from 'react'

const AboutMe = () => {
  return (
    <section className="bg-base-100 py-20 px-5 lg:px-32 relative">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center lg:text-left text-accent">About Me</h2>
        <p className="text-lg text-gray-200">
          I'm Balaji Sudarshan Reddy, a passionate web developer with experience in creating modern and responsive web applications.
          I love building full-stack projects using React, Node.js, Express, and MongoDB.
        </p>
        <p className="text-lg text-gray-200">
          I enjoy learning new technologies and continuously improving my skills. My goal is to create user-friendly and efficient applications
          that make a difference.
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <span className="badge badge-primary">React</span>
          <span className="badge badge-secondary">Node.js</span>
          <span className="badge badge-accent">MongoDB</span>
          <span className="badge badge-info">Express</span>
          <span className="badge badge-success">JavaScript</span>
          <span className="badge badge-warning">Tailwind CSS</span>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className='text-4xl text-accent font-bold text-center mb-10'>Education</h2>
        <div className="relative border-l-2 border-gray-500 ml-4">
          
          {/* First Education */}
          <div className="mb-10 ml-6 relative">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-3 border-2 border-base-100"></div>
            <h3 className="text-xl font-semibold text-gray-100 ml-2">B.Tech in Computer Science Engineering</h3>
            <p className="text-gray-300">NBKR Institute Of Science And Technology</p>
            <p className="text-gray-400 text-sm">2025 - Present</p>
          </div>

          {/* Second Education */}
          <div className="mb-10 ml-6 relative">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-3 border-2 border-base-100"></div>
            <h3 className="text-xl font-semibold text-gray-100 ml-2">Diploma in Computer Science Engineering</h3>
            <p className="text-gray-300">Geethanjali Institute Of Science And Technology</p>
            <p className="text-gray-400 text-sm">2022 - 2025</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe
