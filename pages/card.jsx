import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainCard from "../components/MainCard/MainCard";
import HomeNav from "../components/Products/HomeNav/HomeNav";

function card() {
  return (
    <div>
      <Header />
      <HomeNav />
      <MainCard />
      <Footer />
    </div>
  );
}

export default card;
