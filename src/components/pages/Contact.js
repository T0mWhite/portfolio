import React from "react";

export default function Contact() {
  return (
    <div className="w-50 text-center mx-auto">
      <form className="needs-validation">
        <div className="p-2 mt-5">
          <div className="mb-3 input-group">
            <span className="input-group-text">📧</span>
            <label for="email" className="form-label"></label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-text d-block" id="emailHelp">
            I'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 p-3">
          <label for="inputMessage" className="form-label"></label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            aria-describedby="messageHelp"
            placeholder="Enter message"
          />
          <div id="messageHelp" className="form-text">
            Reach out to me with your questions, I'll get back to you as soon as
            I can.
          </div>
        </div>
        <div className="p-2">
          <button type="submit" className="btn btn-primary">
            Get in touch!
          </button>
        </div>
      </form>
    </div>
  );
}
