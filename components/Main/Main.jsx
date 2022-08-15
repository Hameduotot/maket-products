import React from "react";
import AllProductBtn from "../AllProductBtn/AllProductBtn";
import Custom from "../Cutom/Custom";
import TopPage from "../LandingPage/TopPage";
import FeaturedProduct from "../ProductsSlice/FeaturedProduct";

function Main() {
  return (
    <div>
      <TopPage />
      <FeaturedProduct />
      <AllProductBtn  />
      <Custom />
    </div>
  );
}

export default Main;
