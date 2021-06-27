import React, { useState } from "react";
import resumePDF from "../../images/Resume2020.pdf";

function Resume({}) {
  const [dummyData, setDummyData] = useState([
    { description: "project1" },
    { description: "project2" },
    { description: "project3" },
  ]);

  return (
    <section>
      <a
        href={resumePDF}
        download="Jessica_Pyne_Resume"
        className="resume-text"
      >
        Click <span class="bold">here</span> to download full résumé
      </a>
      <div className="coding-skills">
        <h2 className="fancy-header">Coding Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>React</li>
          <li>...and more to come!</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
