import React from "react";
import Loader from "../loader";
import ContentLoader from "react-content-loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-lg-4 col-sm-6 d-flex align-items-center"
      style={{ height: "280px" }}
    >
      <Loader loading={loading} color="821F40" />
    </div>
  );
}

const HomeTwoFeaturedPrdLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={270}
      height={385}
      viewBox="0 0 270 385"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="8" ry="8" width="270" height="270" />
      <rect x="0" y="285" rx="4" ry="4" width="230" height="20" />
      <rect x="0" y="315" rx="3" ry="3" width="170" height="15" />
      <rect x="0" y="340" rx="3" ry="3" width="115" height="25" />
      <rect x="220" y="340" rx="3" ry="3" width="50" height="25" />
    </ContentLoader>
  );
};

export default HomeTwoFeaturedPrdLoader;
