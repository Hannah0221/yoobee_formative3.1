// add search wala part urself

import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import AboutPage from "./components/AboutPage";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/about"
            component={AboutPage}
            element={
              <AboutPage
                setProgress={setProgress}
                key="about"
                pageSize={pageSize}
                category="about"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
