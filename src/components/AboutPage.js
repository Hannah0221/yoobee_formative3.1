import React, { useState, useEffect } from "react";
import "./AboutPage.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import myImage from "./IMG_2498.JPG";
import resume from "./Hannah_resume.pdf";

const AboutPage = () => {
  return (
    <div>
      <div>
        {/* Icon Bar (Sidebar - hidden on small screens) */}
        <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
          {/* Avatar image in top left corner */}
          <img src={myImage} style={{ width: "100%" }} />
          <a
            href="#"
            className="w3-bar-item w3-button w3-padding-large w3-hover-white"
          >
            <i className="fa fa-home w3-xxlarge" />
            <p>HOME</p>
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button w3-padding-large w3-hover-white"
          >
            <i className="fa fa-user w3-xxlarge" />
            <p>ABOUT</p>
          </a>

          <a
            href="#contact"
            className="w3-bar-item w3-button w3-padding-large w3-hover-white"
          >
            <i className="fa fa-envelope w3-xxlarge" />
            <p>CONTACT</p>
          </a>
        </nav>
        {/* Navbar on small screens (Hidden on medium and large screens) */}
        <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <a
              href="#"
              className="w3-bar-item w3-button"
              style={{ width: "25% !important" }}
            >
              HOME
            </a>
            <a
              href="#about"
              className="w3-bar-item w3-button"
              style={{ width: "25% !important" }}
            >
              ABOUT
            </a>
            <a
              href="#photos"
              className="w3-bar-item w3-button"
              style={{ width: "25% !important" }}
            >
              PHOTOS
            </a>
            <a
              href="#contact"
              className="w3-bar-item w3-button"
              style={{ width: "25% !important" }}
            >
              CONTACT
            </a>
          </div>
        </div>
        {/* Page Content */}
        <div className="w3-padding-large" id="main">
          {/* Header/Home */}
          <header class="masthead">
            <p class="masthead-intro">Hi I'm</p>
            <h1 class="masthead-heading-1">Hannah!</h1>
            <h2 class="masthead-heading-2">UX designer & Web developer</h2>
            <a href={resume} download className="resume-btn">
              <button className="w3-button w3-light-grey  w3-padding-large w3-section">
                <i className="fa fa-download w3-xlarge" /> Download Resume
              </button>
            </a>
          </header>
          {/* About Section */}
          <div
            className="w3-content w3-justify w3-text-grey w3-padding-64"
            id="about"
          >
            <h1 className="w3-text-light-black">Introduction</h1>
            <hr style={{ width: "250px" }} className="w3-opacity" />
            <p>
              I am a web development student currently pursuing my degree in
              Difloma from Yoobee College. During my time in school, I have
              gained valuable experience in programming languages such as HTML,
              CSS, JavaScript, and various web frameworks such as React and
              node.js. I have also had the opportunity to work on several web
              development projects, including an e-commerce site and a content
              management system, which has helped me develop my skills further.
              As a student, I am passionate about web development and believe in
              staying up-to-date with emerging technologies and trends in the
              industry. I am committed to delivering high-quality work, meeting
              project objectives and deadlines, and working collaboratively with
              clients and team members to achieve success. I love the internet,
              technology, and building beautiful things.
            </p>
            <h1 className="w3-text-light-black">Where I'm From</h1>
            <hr style={{ width: "250px" }} className="w3-opacity" />
            <p>I'm originally from Seoul, Korea.</p>
            <h1 className="w3-text-light-black">Where do you live?</h1>
            <hr style={{ width: "250px" }} className="w3-opacity" />
            <p>I live on Auckland, New Zealand</p>

            <h1 className="w3-text-light-black">
              Why do you want to be a web developer?
            </h1>
            <hr style={{ width: "250px" }} className="w3-opacity" />
            <p>
              {" "}
              Because programming is awesome and programming for the internet is
              even more awesome (🤑 💵 💰)
            </p>

            <h1 className="w3-padding-top-16 w3-text-light-black">My Skills</h1>
            <hr style={{ width: "250px" }} className="w3-opacity" />
            <p className="w3-wide">web develop</p>
            <div className="w3-gray">
              <div
                className="w3-dark-grey"
                style={{ height: "28px", width: "65%" }}
              />
            </div>
            <p className="w3-wide">UX&UI Design</p>
            <div className="w3-gray">
              <div
                className="w3-dark-grey"
                style={{ height: "28px", width: "75%" }}
              />
            </div>
            <p className="w3-wide">Adobe tools</p>
            <div className="w3-gray">
              <div
                className="w3-dark-grey"
                style={{ height: "28px", width: "90%" }}
              />
            </div>
            <br />
            <a href={resume} download className="resume-btn">
              <button className="w3-button w3-light-grey  w3-padding-large w3-section">
                <i className="fa fa-download w3-xlarge" /> Download Resume
              </button>
            </a>

            {/* Testimonials */}
            {/* <h3 className="w3-padding-24 w3-text-light-black">My Reputation</h3>
            <img
              src="/w3images/bandmember.jpg"
              alt="Avatar"
              className="w3-left w3-circle w3-margin-right"
              style={{ width: "80px" }}
            />
            <p>
              <span className="w3-large w3-margin-right">Chris Fox.</span> CEO
              at Mighty Schools.
            </p>
            <p>John Doe saved us from a web disaster.</p>
            <br />
            <img
              src="/w3images/avatar_g2.jpg"
              alt="Avatar"
              className="w3-left w3-circle w3-margin-right"
              style={{ width: "80px" }}
            />
            <p>
              <span className="w3-large w3-margin-right">Rebecca Flex.</span>{" "}
              CEO at Company.
            </p>
            <p>No one is better than John Doe.</p> */}
            {/* End About Section */}
          </div>
          {/* Contact Section */}
          <div
            className="contact-me w3-padding-0 w3-content w3-text-grey"
            id="contact"
          >
            <h2 className="w3-text-light-black">Contact Me</h2>
            <hr style={{ width: "200px" }} className="w3-opacity" />
            <div className="w3-section">
              <p>
                <i className="fa fa-map-marker fa-fw w3-text-black w3-xxlarge w3-margin-right" />{" "}
                Auckland,New Zealand
              </p>
              <p>
                <i className="fa fa-phone fa-fw w3-text-black w3-xxlarge w3-margin-right" />{" "}
                Phone: 020 41900192
              </p>
              <p>
                <i className="fa fa-envelope fa-fw w3-text-black w3-xxlarge w3-margin-right">
                  {" "}
                </i>{" "}
                Email: hannah13uk@gmail.com
              </p>
            </div>
            <br />
          </div>

          {/* END PAGE CONTENT */}
        </div>
      </div>

      {/* <h1>About Page!!!!!!!!!!!!PLZ!!!!!!!!!!!!</h1> */}

      <footer class="content-footer">
        <p className="content-footer__p">Say Hi to me on these social Media:</p>
        <ul class="social">
          <li>
            <a class="css-is-deranged" href="https://github.com/Hannah0221">
              GitHub
            </a>
          </li>
          <li>
            <a
              class="css-is-deranged"
              href="https://www.linkedin.com/in/hannah-han-662050255/_"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default AboutPage;
