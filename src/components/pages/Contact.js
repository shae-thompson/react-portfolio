import React from 'react';

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

  input: {
    width: '400px',
    margin: '2px'
  },

  button: {
    color: '#798777',
    borderRadius: '50px',
    backgroundColor: '#F8EDE3',
    border: 'none',
    padding: '5px',
    marginTop: '2px'
  }
}

export default function Contact() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Contact Me!</h1>
        <form class='container'>
        
        <div class='row'>
          <label style={styles.subHeading} for="name">Name:</label>
          <input style={styles.input} type="text" id="name" name="name" placeholder="Your name.."></input>
        </div>
        
        <div class='row'>
          <label style={styles.subHeading} for="email">Email:</label>
          <input style={styles.input} type="email" id="email" name="email" placeholder="Your email.." required ></input>
        </div>

        <div class='row'>
          <label style={styles.subHeading} for="subject">Message:</label>
          <textarea style={styles.input} id="subject" name="subject" placeholder="Please write to me.."></textarea>
        </div>

        <input style={styles.button} type="submit" value="Submit"></input>
        </form>
    </div>
  );
}
