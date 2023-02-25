import React, { useState, useEffect } from "react";
import "./AboutPage.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      {/* <h1>About Page!!!!!!!!!!!!PLZ!!!!!!!!!!!!</h1> */}
      <header class="masthead">
        <p class="masthead-intro">Hi I'm</p>
        <h1 class="masthead-heading-1">Hannah!</h1>
        <h2 class="masthead-heading-2">UX designer & Web developer</h2>
      </header>
      <section class="introduction-section">
        <h1>Introduction</h1>
        <p>
          I am a web development student currently pursuing my degree in Difloma
          from Yoobee College. During my time in school, I have gained valuable
          experience in programming languages such as HTML, CSS, JavaScript, and
          various web frameworks such as React and node.js. I have also had the
          opportunity to work on several web development projects, including an
          e-commerce site and a content management system, which has helped me
          develop my skills further. As a student, I am passionate about web
          development and believe in staying up-to-date with emerging
          technologies and trends in the industry. I am committed to delivering
          high-quality work, meeting project objectives and deadlines, and
          working collaboratively with clients and team members to achieve
          success.
        </p>
        <p>I love the internet, technology, and building beautiful things.</p>
      </section>
      <section class="location-section">
        <h1>Where I'm From</h1>
        <p>I'm originally from Seoul, Korea. </p>
      </section>
      <section class="questions-section">
        <h1>More About Me</h1>
        <h2>What are your favorite hobbies?</h2>
        <p>
          My favorite hobby is Exploring new places, cultures, and cuisines can
          be a way to learn and broaden one's horizons. And also Gardening,
          Growing plants and tending to a garden can be a way to connect with
          nature and beautify one's surroundings.
        </p>

        <h2>Where do you live?</h2>
        <p>I live on Auckland, New Zealand</p>

        <h2>Why do you want to be a web developer?</h2>
        <p>
          Because programming is awesome and programming for the internet is
          even more awesome.
        </p>
      </section>

      <footer class="content-footer">
        <p>Say Hi to me on these social Media:</p>
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
