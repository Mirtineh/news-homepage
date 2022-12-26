import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main>
      <App />
    </main>
    <footer>
      <div className="text-center text-marine-blue">
        <span>Challenge by </span>
        <a
          href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
          target="_blank"
          className="hover:cursor-pointer hover:text-sort-red font-bold"
        >
          Frontend Mentor
        </a>
        . <span>Coded by </span>
        <a
          href="https://www.frontendmentor.io/profile/Mirtineh"
          className="hover:cursor-pointer font-bold hover:text-sort-red"
        >
          Mirtineh
        </a>
        .
      </div>
    </footer>
  </React.StrictMode>
);
