import React, { useState } from 'react';

import Project from '../Project';

function Portfolio() {
    const [dummyData,setDummyData] = useState([{ description: "project1"}, { description: "project2"}, { description: "project3"}])
    return (
        <section>
        <div>
            <h2>Portfolio</h2>
        </div>
        {dummyData.map(({description})=> <Project description={description} />)}
        </section>
    )
}

export default Portfolio;