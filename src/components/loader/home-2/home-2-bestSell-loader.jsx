import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex align-items-center justify-content-center"
      style={{ height: "350px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const HomeTwoBestSellPrdPrdLoader = ({loading}) => {
  return (
    <div className="row">
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </div>
  );
};

export default HomeTwoBestSellPrdPrdLoader; 