import React from 'react'

const Hero = ({ title, subtitle }) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4" style={{ 
      backgroundImage: `url(${require('../assets/hero.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      marginTop: '-4px'
      
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            style={{ textShadow: '4px 4px 4px rgb(198, 63, 167)' }}>
            {title}
          </h1>
          <p className="my-4 text-xl text-white"
          style={{ textShadow: '2px 2px 2px rgb(198, 63, 167)' }}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero