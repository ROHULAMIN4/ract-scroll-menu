import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [li1, setLi1] = useState(false);
  const [li2, setLi2] = useState(false);
  const [li3, setLi3] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100 && window.pageYOffset < 299) {
        setLi1(true);
        setLi2(false);
        setLi3(false);

        // alert("hello");
      } else if (window.pageYOffset > 300 && window.pageYOffset < 599) {
        setLi2(true);
        setLi1(false);

        setLi3(false);
      } else if (window.pageYOffset > 600 && window.pageYOffset < 899) {
        setLi3(true);
        setLi1(false);
        setLi2(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="scroll-to-top">
      <div className="id4">
        <ul>
          <li id="in">home</li>
          <li id="inn">About</li>
          <li id="innn">Alo</li>
        </ul>
      </div>
      {li1 && (
        <div className="id4">
          <ul>
            <li id="in" className="std">
              home
            </li>
            <li id="inn">About</li>
            <li id="innn">Alo</li>
          </ul>
        </div>
      )}
      {li2 && (
        <div className="id4">
          <ul>
            <li id="in">home</li>
            <li id="inn" className="std">
              About
            </li>
            <li id="innn">Alo</li>
          </ul>
        </div>
      )}
      {li3 && (
        <div className="id4">
          <ul>
            <li id="in">home</li>
            <li id="inn">About</li>
            <li id="innn" className="std">
              Alo
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
