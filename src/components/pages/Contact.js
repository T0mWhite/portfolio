import React from "react";

export default function Contact() {
  return (
    <div className="w-50 text-center mx-auto">
      <form>
        <div>
          <div className="mb-3 input-group">
            <span class="input-group-text">📧</span>
            <label for="exampleInputEmail1" className="form-label"></label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
            <div className="form-text d-block" id="emailHelp">
              I'll never share your email with anyone else.
            </div>
        </div>
        <div className="mb-3">
          <label for="inputMessage" className="form-label">
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            aria-describedby="messageHelp"
            placeholder="Message"
          />
          <div id="messageHelp" className="form-text">
            Reach out to me with your questions, I'll get back to you as soon as
            I can.
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Get in touch!
        </button>
      </form>
    </div>
  );
}
