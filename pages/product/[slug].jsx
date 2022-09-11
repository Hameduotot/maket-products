import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePageData } from "../../features/Readucers/getSinglePage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainSinglePage from "../../components/MainSiglePage/MainSinglePage";

const SingelPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.singlePageData);

  useEffect(() => {
    dispatch(getSinglePageData(router.query.slug));
  }, []);
  console.log(data);
  return (
    <div>
      <Header />
      {data ? <MainSinglePage data={data} /> : null}
      <Footer />
    </div>
  );
};

export default SingelPage;
