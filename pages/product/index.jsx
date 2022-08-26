import React, { useEffect } from "react";
import Products from "../../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../features/Readucers/getDataSlice";

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
      {post.data !== null ? (
        <Products
          products={post.filteredData || post.data}
        />
      ) : null}
    </div>
  );
}

export default ProductPage;
