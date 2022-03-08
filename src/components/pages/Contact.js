import React from 'react';

import email from '../../assets/images/email.png';

export default function Contact() {
  return (
    <div className='container'>
      <div className='contact__card'>
        <h3>Reach out to me on LinkedIn (below), or send me an email at:</h3>
        <img title='email' src={email} alt='tbw2.mail@gmail.com'></img>
      </div>
      {/* TODO: Direct email */}
      {/* <form className="contact__card">
        <div className="form__spacing">
          <div>
            <label for="email"></label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div>I'll never share your email with anyone else.</div>
        </div>
        <div className="form__spacing">
          <label for="inputMessage"></label>
          <textarea
            id="message"
            rows="2"

            placeholder="Enter message"
          />
          <div id="messageHelp">
            Reach out to me with your questions, I'll get back to you as soon as
            I can.
          </div>
        </div>
        <div>
          <button className="about__text" type="submit">📧 Send it! 📧</button>
        </div>
      </form> */}
    </div>
  );
}
