import React from "react";
import "./whatGPT.css";
import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
  return (
    <section className="gpt3__whatgpt3 section__margin" id="whpt3">
      <section className="gpt3__whatgpt3-feature">
        <Feature></Feature>
      </section>

      <section className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </section>

      <section className="gpt3__whatgpt3-container">
        <Feature></Feature>
        <Feature></Feature>
        <Feature></Feature>
      </section>
    </section>
  );
};

export default WhatGPT3;
