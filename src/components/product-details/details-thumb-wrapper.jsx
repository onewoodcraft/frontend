'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import PopupVideo from "../common/popup-video";

const DetailsThumbWrapper = ({
  imageURLs = [],
  handleImageActive,
  activeImg,
  imgWidth = 416,
  imgHeight = 480,
  videoId = false,
  status
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Ensure imageURLs is an array and has at least one image
    if (Array.isArray(imageURLs) && imageURLs.length > 0) {
      setImages(imageURLs);
    } else {
      // If no imageURLs provided, create a default image object
      setImages([{ img: activeImg || '/assets/img/product/quick-view-1.jpg' }]);
    }
  }, [imageURLs, activeImg]);

  return (
    <>
      <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
        <nav>
          <div className="nav nav-tabs flex-sm-column">
            {images.map((item, i) => (
              <button
                key={i}
                className={`nav-link ${item.img === activeImg ? "active" : ""}`}
                onClick={() => handleImageActive(item)}
              >
                <Image
                  src={item.img || '/assets/img/product/quick-view-1.jpg'}
                  alt="product image"
                  width={78}
                  height={100}
                  style={{ width: "100%", height: "100%" }}
                  onError={(e) => {
                    e.target.src = '/assets/img/product/quick-view-1.jpg';
                  }}
                />
              </button>
            ))}
          </div>
        </nav>
        <div className="tab-content m-img">
          <div className="tab-pane fade show active">
            <div className="tp-product-details-nav-main-thumb p-relative">
              <Image
                src={activeImg || '/assets/img/product/quick-view-1.jpg'}
                alt="product image"
                width={imgWidth}
                height={imgHeight}
                onError={(e) => {
                  e.target.src = '/assets/img/product/quick-view-1.jpg';
                }}
              />
              <div className="tp-product-badge">
                {status === 'out-of-stock' && <span className="product-hot">out-stock</span>}
              </div>
              {videoId && (
                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="tp-product-details-thumb-video"
                >
                  <a className="tp-product-details-thumb-video-btn cursor-pointer popup-video">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* modal popup start */}
      {videoId && (
        <PopupVideo
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={videoId}
        />
      )}
      {/* modal popup end */}
    </>
  );
};

export default DetailsThumbWrapper;
