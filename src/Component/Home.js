import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../Images/home.svg";
import "../css/Home.css";
import Same from "./Same";

const Home = () => {
  return <Same img={homeimg} />;
};

export default Home;
