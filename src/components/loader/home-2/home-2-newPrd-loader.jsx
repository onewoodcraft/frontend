import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-xl-3 col-lg-3 col-sm-6 d-flex align-items-center justify-content-center"
      style={{ height: "350px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const HomeTwoNewPrdPrdLoader = ({loading}) => {
  return (
    <div className="row">
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </div>
  );
};

export default HomeTwoNewPrdPrdLoader; 