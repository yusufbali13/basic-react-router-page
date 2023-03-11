import React from "react";
import hata from "../assets/404.png";

const NotFound = () => {
  return (
    <div>
      <h5>Aradığınız Sayfa Bulunamadı!</h5>
      <img src={hata} alt="" />
    </div>
  );
};

export default NotFound;
