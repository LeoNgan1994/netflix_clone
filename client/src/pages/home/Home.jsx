import React from "react";
import { Featured, Navbar } from "../../components";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
   
      <Featured />
    </div>
  );
};
