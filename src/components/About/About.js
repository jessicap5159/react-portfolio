import React from 'react'
import coverImage from "../../images/portfoliome.png";

function About() {

  return (
    <div className="container">
     
      <div className="image">
      <img src={coverImage} style={{ width: "150%" }} alt="photo of Jessica" />
      </div>
      <div className="text">
        <h1 className="fancy-header">Who Am I?</h1>
        <p>
          My name is Jessica Pyne. I was born in London, England, but moved to the U.S. as a small child, where I have lived ever since. 
          I graduated from UC Santa Cruz in 2012 with a degree in psychology, and have also studied a number of languages, including Spanish, Greek, Hebrew, and Latin. 
          I began to code in 2020, when I realized that I could apply my language skills to web development. I hope to be able to use these skills to support things that are important to me. Please contact me 
          with any questions, or if you'd like to work on something together!
      </p>
      
    </div>
    </div>
  )
}

export default About;