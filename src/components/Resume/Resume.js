import React, { useState } from 'react';
function Resume() {
    const [dummyData,setDummyData] = useState([{ description: "project1"}, { description: "project2"}, { description: "project3"}])

return (
    <section>
        <div>
    <h2>Education</h2>
    <ul>
        <li>B.A. in Psychology from University of California, Santa Cruz (2012)</li>
        <li>Certificate of Completion, Coding Boot Camp, UC Berkeley Ext. (2021, God willing)</li>
    </ul>
    </div>
    <div>
    <h2>Coding Skills</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
        <li>Handlebars</li>
        <li>React</li>
    </ul>
    </div>
    
    </section>
)
}

export default Resume;