import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <section className="gpt3__header section__padding" id="home">
      <section className="gpt3__header-content">
        <h1 className="gradient__text">
          Let`s Build Something amazing with GPT-3 OpenAi
        </h1>
        <p>
          {" "}
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <article className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email" />
          <button type="button">Get Started</button>
        </article>

        <article className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 people requested access</p>
        </article>
      </section>

      <article className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </article>
    </section>
  );
};

export default Header;
