import React from 'react';



function Project({description, image, title, gitHubLink, projectLink}) {
  return (
    <section>
    <div>
          <h2>{title}</h2>
          <p>{description}</p>
       
          <a href={gitHubLink} target="_blank">Link to GitHub repo for {title}</a>
          <a href={projectLink} target="_blank"><img className="img" src={image} alt="image of app"/></a>
      </div>
    </section>
  );
}
export default Project;