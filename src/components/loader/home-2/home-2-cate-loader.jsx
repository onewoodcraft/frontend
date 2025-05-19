import React from "react";
import Loader from "../loader";
import ContentLoader from "react-content-loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-xxl-4 col-lg-6 d-flex align-items-center justify-content-center"
      style={{ height: "250px" }}
    >
      <Loader loading={loading} color="821F40" />
    </div>
  );
}

const HomeTwoCateLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={210}
      height={280}
      viewBox="0 0 210 280"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="8" ry="8" width="210" height="210" />
      <rect x="30" y="225" rx="4" ry="4" width="150" height="20" />
      <rect x="60" y="255" rx="3" ry="3" width="90" height="15" />
    </ContentLoader>
  );
};

export default HomeTwoCateLoader;
