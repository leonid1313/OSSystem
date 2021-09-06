import React from 'react'
import './About.css'

function About ({
  ...props
}) {

  console.log(props);

    return (
      <div className="container-about">
        About
      </div>
    )
}

export default About;