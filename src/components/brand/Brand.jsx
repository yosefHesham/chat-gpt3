import React from "react";
import "./brand.css";
import { google, slack, atlassian, shopify, dropbox } from "./imports";

const Brand = () => {
  return (
    <section className="gpt3__brand section__padding ">
      <section>
        <img src={google} alt="google"></img>
      </section>
      <section>
        <img src={slack} alt="slack"></img>
      </section>
      <section>
        <img src={atlassian} alt="atlassian"></img>
      </section>
      <section>
        <img src={dropbox} alt="dropbox"></img>
      </section>
      <section>
        <img src={shopify} alt="shopify"></img>
      </section>
    </section>
  );
};

export default Brand;
