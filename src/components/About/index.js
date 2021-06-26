import React from 'react'
// import coverImage from "../../assets/cover/cover-image.jpg";
// import my own photo

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who is Jessica?</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, rutrum quis nunc ac, egestas porta felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam feugiat nisl ac lectus faucibus pellentesque. Integer ac ante et felis ornare scelerisque. Suspendisse nunc sapien, vestibulum eget consectetur nec, consequat vitae nisl. Fusce odio nulla, suscipit in gravida id, blandit ac velit. Ut vestibulum ipsum eget purus vulputate, a tempor odio fringilla. Nulla molestie hendrerit est id laoreet. Fusce ut mi non ante tincidunt egestas sed vel sem. Morbi venenatis odio felis, vitae convallis sapien rhoncus eget. Duis suscipit condimentum diam quis hendrerit.
      </p>
      </div>
    </section>
  )
}

export default About;