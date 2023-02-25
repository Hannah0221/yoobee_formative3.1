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
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/user/:id">About</Link>
        </div>
      </nav>
      {/* <h1>About Page!!!!!!!!!!!!PLZ!!!!!!!!!!!!</h1> */}
      <header class="masthead">
        <p class="masthead-intro">Hi I'm</p>
        <h1 class="masthead-heading">Hannah!</h1>
      </header>
      <section class="introduction-section">
        <h1>Introduction</h1>
        <p>
          I am a construction business owner, part time marketer, and soon to be
          web developer.
        </p>
        <p>I love the internet, technology, and building beautiful things.</p>
      </section>
      <section class="location-section">
        <h1>Where I'm From</h1>
        <p>I'm originally from Toronto, Ontario. </p>
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
        <h2>What's your dream job?</h2>
        <p>
          My dream job is similar to my current job except I would like to be
          building Website instead of cloth.
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
        <p>Say hi to me on these social networks:</p>
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
          {/* <li>
            <a class="css-is-deranged" href="_INSERT_GOOGLE+_URL_HERE_">
              Google+
            </a>
          </li> */}
        </ul>
      </footer>
    </div>
  );
};

export default AboutPage;
