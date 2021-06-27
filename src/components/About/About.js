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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, rutrum quis nunc ac, egestas porta felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam feugiat nisl ac lectus faucibus pellentesque. Integer ac ante et felis ornare scelerisque. Suspendisse nunc sapien, vestibulum eget consectetur nec, consequat vitae nisl. Fusce odio nulla, suscipit in gravida id, blandit ac velit. Ut vestibulum ipsum eget purus vulputate, a tempor odio fringilla. Nulla molestie hendrerit est id laoreet. Fusce ut mi non ante tincidunt egestas sed vel sem. Morbi venenatis odio felis, vitae convallis sapien rhoncus eget. Duis suscipit condimentum diam quis hendrerit.
      </p>
      
    </div>
    </div>
  )
}

export default About;