import "./Contact.css";

import { useState } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import { Element } from "react-scroll";
import { toast } from "react-toastify";

import React from "react";

function Contact() {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [message, setmessage] = useState("");

  const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  async function submit(e) {
    e.preventDefault();

    try {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      init(process.env.REACT_APP_USER_ID);
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            // alert("Message sent", response.text);
            toast.success("Message sent", toastOptions);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      setname("");
      setemail("");
      setmessage("");
    } catch (error) {
      toast.error("something went wrong, try again later !!", toastOptions);
    }
  }

  return (
    <Element name="contact">
      <div className="Contactcontent">
        <div className="Contactcontent__Title ">
          <h1>CONTACT</h1>
        </div>

        <form onSubmit={submit}>
          <div className="row Contactcontent__Row m-0">
            <div className="col-6">
              <div class="form-group ">
                <label for="Forname">Your Name</label>
                <input
                  type="name"
                  name="name"
                  id="Forname"
                  class="form-control"
                  placeholder="ie.John doe"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="row Contactcontent__Row m-0">
            <div className="col-6">
              <div class="form-group ">
                <label for="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="row Contactcontent__Row m-0">
            <div className="col-6">
              <div class="form-group ">
                <label for="message">Your Message</label>
                <input
                  type="text"
                  name="message"
                  id="message"
                  rows="1"
                  class="form-control"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  placeholder="Your Message"
                  style={{ height: "100px" }}
                ></input>
              </div>
            </div>
          </div>
          <div className="row Contactcontent__RowButton m-0">
            <div className="col-6">
              <div class="form-group">
                <button
                  class="btn btn-outline-dark"
                  type="submit"
                  value="Send"
                  id="contactbutton"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Element>
  );
}

export default Contact;
