import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePageData } from "../../features/Readucers/getSinglePage";

const SingelPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.singlePageData);

  useEffect(() => {
    dispatch(getSinglePageData(router.query.slug));
  }, []);
    console.log(data);
  return <div>SingelPage</div>;
};

export default SingelPage;
