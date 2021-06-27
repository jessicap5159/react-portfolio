import React from 'react';



function Project({description, image, title, gitHubLink, projectLink}) {
  return (
    <section>
    <div className="row">
      <div className="column">
          <h3>{title}</h3>
          <p>{description}</p>
       
          <a href={gitHubLink} target="_blank">Link to GitHub repo for {title}</a>
          <a href={projectLink} target="_blank"><img className="img" src={image} style={{ width: "100%" }} alt="image of app"/></a>
      </div>
      </div>
    </section>
  );
}
export default Project;