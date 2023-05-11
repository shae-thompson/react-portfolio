import React from 'react';
import MyResume from "../../assets/ShaelahThompsonResume.pdf";

const styles = {
  page: {
    margin: '10px',
  },
  heading: {
    color: '#798777',
    fontSize: '30px',
    fontFamily: 'serif',
  },
  subHeading: {
    color: '#798777',
    fontSize: '20px',
    fontFamily: 'serif',
  },

  body: {
    fontFamily: 'serif',
    color: 'black',
  },

  skills: {
    display: 'grid',
    gridTemplateColumns: '50% 50%'
  },

  skillsList: {
    backgroundColor: '#F8EDE3',
    padding: '10px',
    borderRadius: '10px',
  },
  
  link: {
    color: '#798777',
    textDecoration: 'none',
  }
}

export default function Resume() {
  return (
    <div class='container' style={styles.page}>
      <h1 style={styles.heading}>Resume</h1>
      <div style={styles.body}>
        <p>
        You can download my resume, <a style={styles.link} href={MyResume} download>here!</a>
        </p>
        <div class='row'>
          <div style={styles.skillsList} class='col-2 offset-3'>
            <h3 style={styles.subHeading}>Front-End Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div style={styles.skillsList} class='col-2 offset-2'>
            <h3 style={styles.subHeading}>Back-End Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
