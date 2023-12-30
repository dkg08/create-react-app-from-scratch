import React from "react";
import "./App.css";
import logo from "./assets/react.jpg";

export default function App() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">Welcome, fellow developer!</h1>
      <p className="welcome-message">We're glad to have you here.</p>
      <img src={logo} alt="react-logo" style={{ width: 500, height: 300 }} />
    </div>
  );
}
