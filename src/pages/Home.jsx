import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <h1>Professional Web Design</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
          interdum condimentum.
        </p>
      </div>
      <Header />
      <Card />
    </div>
  );
};

export default Home;
