import React from 'react';
import Me from '../../assets/me.jpeg'

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

  image: {
    borderRadius: '10px',
  }
}

export default function Home() {
  return (
    <div class ='container' style={styles.page}>
      <h1 style={styles.heading}>About Me</h1>
      <div class='row'>
        <img src={Me} class="col-2"></img>
        <p style={styles.body} class='col'>
        Hello! I am Shae, a 22-year-old student studying law at QUT and completing University of Adelaide coding bootcamp. I am hoping to one day work as in-house counsel within the tech sector. I wanted to learn more about tech and coding, whilst also creating an opportunity for me to work within the sector whilst completing my studies. So, I chose to dive head first into the bootcamp with no prior knowledge and just hoping for the best.  In my spare time I like to hang out with my dog, go for coffee walks with friends or tend to my many house plants! 🐶☕🌱
        </p>
        </div>
    </div>
  );
}
