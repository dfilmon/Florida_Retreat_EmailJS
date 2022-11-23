import React from 'react';
import './style.css';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_irpyw2f',
        'template_nbv5ics',
        form.current,
        'KR0sD3OLoqr0-zKXr'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>First Name</label>
      <input type="text" name="user_name" />

      <label>Last Name</label>
      <input type="text" name="user_name" />

      <label>Email</label>
      <input type="email" name="user_email" />

      <label>Age</label>
      <input type="text" name="user_age" />

      <label>What Grade are you in?</label>
      <input type="text" name="user_grade" />

      <label>What's your GPA? We will check in-person...</label>
      <input type="text" name="user_gpa" />

      <label>Hair Length approved by which Sunday School Teacher?</label>
      <input type="text" name="user_hair" />

      <label>Behavior approved by which Sunday School Teacher? </label>
      <input type="text" name="user_name" />

      <label>Anything else you want to add?</label>
      <textarea name="message" />
      <input type="submit" defaultValue="Send" />
    </form>
  );
};

export default function App() {
  return (
    <div>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta charset="UTF-8" />
        <title>Contact Us</title>

        <link
          href="https://unpkg.com/cirrus-ui"
          type="text/css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />

        <script
          src="https://code.jquery.com/jquery-2.2.4.min.js"
          integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
          crossorigin="anonymous"
        ></script>

        <script src="//cdn.jsdelivr.net/npm/faunadb@latest/dist/faunadb-min.js"></script>
      </head>
      <div id="app">
        <div id="hero" className="componentContainer">
          <div id="heroLeft">
            <h1>Spiritual</h1>
            <h1>Retreat</h1>
            <h6>Orlando Florida...</h6>
            <button>I'm Going</button>
          </div>
          <div id="heroRight">Image goes here</div>
        </div>

        {/* <!-- REQUIREMENTS ENDS --> */}

        <div id="requirements" className="componentContainer">
          <div id="reqLeft">Image goes here</div>
          <div id="reqRight">
            <h1>Requirements</h1>
            <ul>
              <li>8th Grade+</li>
              <li>GPA 3.0+</li>
              <li>Hair must be short</li>
              <li>Sunday School Teacher Approval</li>
            </ul>

            <h1>Price</h1>
            <ul>
              <li>Save $400 Total</li>
              <li>$200 for Air Ticket</li>
              <li>$50 for Airbnb</li>
              <li>$150 for pocket money</li>
            </ul>
          </div>
        </div>

        {/* <!-- REQUIREMENTS ENDS --> */}

        <div id="connect" className="componentContainer"></div>

        <div id="engage" className="componentContainer"></div>

        <div id="whyFlorida" className="componentContainer"></div>

        {/* <!-- REGISTER BEGINS --> */}

        <div id="register" className="componentContainer">
          <ContactUs />
        </div>

        {/* <!-- REGISTER ENDS --> */}

        {/* <!-- FOOTER ENDS --> */}
        <div id="footer" className="componentContainer"></div>
      </div>
      {/* <!-- FOOTER ENDS --> */}s
    </div>
  );
}
