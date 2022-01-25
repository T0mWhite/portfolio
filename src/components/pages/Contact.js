import React from "react";

export default function Contact() {
  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          I'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="inputMessage" className="form-label">
          Message
        </label>
        <input
          type="message"
          className="form-control"
          id="Inputmessage"
          aria-describedby="messageHelp"
        />
        <div id="messageHelp" className="form-text">
          Reach out to me with your questions, I'll get back to you as soon as I can.
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Get in touch!
      </button>
    </form>
  );
}
