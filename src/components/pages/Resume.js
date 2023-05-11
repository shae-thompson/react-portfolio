import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
       Download my resume, <a>here!</a>
      </p>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        {/* <li>REST</li>
        <li>GraphQL</li> */}
      </ul>
    </div>
  );
}
