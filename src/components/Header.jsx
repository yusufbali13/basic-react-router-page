import React from "react";

const Header = () => {
  return (
    <div>
      <section className="header">
        <article>
          <h3>Subscribe To Our Newsletter</h3>
        </article>
        <article>
          <input type="email" name="email" placeholder="Enter Email..." />
          <button className="buton">Subscribe</button>
        </article>
      </section>
    </div>
  );
};

export default Header;
