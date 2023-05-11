import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me!</h1>
      <form>

      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name.."></input>

      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email.."></input>

      <label for="subject">Message</label>
      <textarea id="subject" name="subject" placeholder="Please write to me.."></textarea>

      <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
