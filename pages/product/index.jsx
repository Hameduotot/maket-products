import React, { useEffect } from "react";
import Products from "../../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../features/Readucers/getDataSlice";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function ProductPage() {
  const dispatch = useDispatch();

  const post = useSelector((state) => state.post);

  useEffect(() => {
    if (post.data === null) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div>
      <Header />
      {post.data !== null ? (
        <Products products={post.filteredData || post.data} />
      ) : null}
      <Footer />
    </div>
  );
}

export default ProductPage;
