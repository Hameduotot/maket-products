import React, { useState, useEffect } from "react";
import axios from "axios";

const GetData = () => {
  const [product, setProduct] = useState([]);
  const getData = async () => {
    await axios
      .get("https://course-api.com/react-store-products")
      .then((data) => setProduct(data.data));
  };

  useEffect(() => {
    getData();
    console.log("product", product);
  }, []);
  return <div>GetData</div>;
};

export default GetData;
