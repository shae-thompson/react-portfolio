import React from 'react';
import Mechanomicon from '../../assets/Mechanomicon.png';
import Flightdex from '../../assets/FlightDex.png';
import Scheduler from '../../assets/Scheduler.png';
import Horiseon from '../../assets/Horiseon.png';
import TextEditor from '../../assets/TextEditor.png';
import NoteTaker from '../../assets/NoteTaker.png';

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
  
  link: {
    color: '#798777',
    textDecoration: 'none',
  },

  image: {
    width:'500px'
  }
}

export default function Portfolio() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Portfolio</h1>
      <p style={styles.body}>
       Below is a small display of some of my works. If you wish to view more, please head over to my<a style={styles.link} href="https://github.com/shae-thompson"> GitHub</a>!
      </p>
      <div class='container'>
        <div class='row'>
          <div class="col">
            <h3 style={styles.subHeading}><a style={styles.link} href='https://craigrobertsdev.github.io/flightdex/'>FlightDex</a></h3>
            <p style={styles.body}>FlightDex is a flight, accommodation, and event search engine to plan your perfect holiday!</p>
            <img style={styles.image} src={Flightdex}></img>
          </div>
          <div class='col'>
            <h3 style={styles.subHeading}><a style={styles.link} href='https://mechanomicon.herokuapp.com/'>Mechanomicon</a></h3>
            <p style={styles.body}>Mechanomicon is a vehicle management and service booking platform to streamline car ownership and maintenance!</p>
            <img style={styles.image} src={Mechanomicon}></img>
          </div>
        </div>
        <div class='row'>
          <div class="col" >
            <h3 style={styles.subHeading}><a style={styles.link} href='https://sleepy-bayou-36650.herokuapp.com/'>Text Editor</a></h3>
            <p style={styles.body}>A web app to save and edit text</p>
            <img style={styles.image} src={TextEditor}></img>
          </div>
          <div class='col'>
            <h3 style={styles.subHeading}><a style={styles.link} href='https://lit-everglades-11403.herokuapp.com/'>Note Taker</a></h3>
            <p style={styles.body}>Make notes and then download them onto your computer for eay off internet access!</p>
            <img style={styles.image} src={NoteTaker}></img>
          </div>
        </div>
        <div class='row'>
          <div class="col">
            <h3 style={styles.subHeading}><a style={styles.link} href='https://shae-thompson.github.io/Work-Day-Scheduler/'>Work Day Scheduler</a></h3>
            <p style={styles.body}>Use the work day scheduler to plan your tasks for the day</p>
            <img style={styles.image} src={Scheduler}></img>
          </div>
          <div class='col'>
            <h3 style={styles.subHeading}><a style={styles.link} href='https://shae-thompson.github.io/Horiseon-Refactoring/'>Horiseon Refactoring</a></h3>
            <p style={styles.body}>A refactored website to remove issues and make some slight stylistic changes</p>
            <img style ={styles.image} src={Horiseon}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
