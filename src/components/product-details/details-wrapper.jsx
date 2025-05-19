'use client';
import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
// internal
import { AskQuestion, CompareTwo, WishlistTwo } from '@/svg';
import DetailsBottomInfo from './details-bottom-info';
import ProductDetailsCountdown from './product-details-countdown';
import ProductQuantity from './product-quantity';
import { add_cart_product } from '@/redux/features/cartSlice';
import { add_to_wishlist } from '@/redux/features/wishlist-slice';
import { add_to_compare } from '@/redux/features/compareSlice';
import { handleModalClose } from '@/redux/features/productModalSlice';

const DetailsWrapper = ({ productItem = {}, handleImageActive, activeImg, detailsBottom = false }) => {
  const {
    sku = '',
    img = '/assets/img/product/quick-view-1.jpg',
    title = 'Product Title',
    imageURLs = [],
    category = { name: 'Uncategorized' },
    description = 'No description available',
    discount = 0,
    price = 0,
    status = 'in-stock',
    reviews = [],
    tags = [],
    offerDate = null
  } = productItem;

  const [ratingVal, setRatingVal] = useState(0);
  const [textMore, setTextMore] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const rating =
        reviews.reduce((acc, review) => acc + (review.rating || 0), 0) /
        reviews.length;
      setRatingVal(rating);
    } else {
      setRatingVal(0);
    }
  }, [reviews]);

  // handle add product
  const handleAddProduct = (prd) => {
    if (prd && prd.status !== 'out-of-stock') {
      dispatch(add_cart_product(prd));
    }
  };

  // handle wishlist product
  const handleWishlistProduct = (prd) => {
    if (prd) {
      dispatch(add_to_wishlist(prd));
    }
  };

  // handle compare product
  const handleCompareProduct = (prd) => {
    if (prd) {
      dispatch(add_to_compare(prd));
    }
  };

  const displayPrice = Number(price) || 0;
  const displayDiscount = Number(discount) || 0;
  const discountedPrice = displayDiscount > 0 
    ? (displayPrice - (displayPrice * displayDiscount) / 100).toFixed(2)
    : displayPrice.toFixed(2);

  return (
    <div className="tp-product-details-wrapper">
      <div className="tp-product-details-category">
        <span>{category?.name || 'Uncategorized'}</span>
      </div>
      <h3 className="tp-product-details-title">{title}</h3>

      {/* inventory details */}
      <div className="tp-product-details-inventory d-flex align-items-center mb-10">
        <div className="tp-product-details-stock mb-10">
          <span>{status}</span>
        </div>
        <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
          <div className="tp-product-details-rating">
            <Rating allowFraction size={16} initialValue={ratingVal} readonly={true} />
          </div>
          <div className="tp-product-details-reviews">
            <span>({reviews?.length || 0} Review)</span>
          </div>
        </div>
      </div>
      <p>
        {description && (
          <>
            {textMore ? description : `${description.substring(0, 100)}...`}
            <span onClick={() => setTextMore(!textMore)} className="cursor-pointer">
              {textMore ? ' See less' : ' See more'}
            </span>
          </>
        )}
      </p>

      {/* price */}
      <div className="tp-product-details-price-wrapper mb-20">
        {displayDiscount > 0 ? (
          <>
            <span className="tp-product-details-price old-price">${displayPrice}</span>
            <span className="tp-product-details-price new-price">
              ${discountedPrice}
            </span>
          </>
        ) : (
          <span className="tp-product-details-price new-price">${displayPrice}</span>
        )}
      </div>

      {/* variations */}
      {Array.isArray(imageURLs) && imageURLs.some(item => item?.color?.name) && (
        <div className="tp-product-details-variation">
          <div className="tp-product-details-variation-item">
            <h4 className="tp-section-title-4">Color :</h4>
            <div className="tp-product-details-variation-list">
              {imageURLs.map((item, i) => (
                <button 
                  onClick={() => handleImageActive(item)} 
                  key={i} 
                  type="button"
                  className={`color tp-color-variation-btn ${item.img === activeImg ? "active" : ""}`}
                >
                  <span
                    data-bg-color={item.color?.clrCode || '#000000'}
                    style={{ backgroundColor: item.color?.clrCode || '#000000' }}
                  ></span>
                  {item.color?.name && (
                    <span className="tp-color-variation-tootltip">
                      {item.color.name}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* if ProductDetailsCountdown true start */}
      {offerDate?.endDate && <ProductDetailsCountdown offerExpiryTime={offerDate.endDate} />}
      {/* if ProductDetailsCountdown true end */}

      {/* actions */}
      <div className="tp-product-details-action-wrapper">
        <h3 className="tp-product-details-action-title">Quantity</h3>
        <div className="tp-product-details-action-item-wrapper d-sm-flex align-items-center">
          {/* product quantity */}
          <ProductQuantity />
          {/* product quantity */}
          <div className="tp-product-details-add-to-cart mb-15 w-100">
            <button 
              onClick={() => handleAddProduct(productItem)} 
              disabled={status === 'out-of-stock'} 
              className="tp-product-details-add-to-cart-btn w-100"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <Link href="/cart" onClick={() => dispatch(handleModalClose())}>
          <button className="tp-product-details-buy-now-btn w-100">Buy Now</button>
        </Link>
      </div>
      {/* product-details-action-sm start */}
      <div className="tp-product-details-action-sm">
        <button 
          disabled={status === 'out-of-stock'} 
          onClick={() => handleCompareProduct(productItem)} 
          type="button" 
          className="tp-product-details-action-sm-btn"
        >
          <CompareTwo />
          Compare
        </button>
        <button 
          disabled={status === 'out-of-stock'} 
          onClick={() => handleWishlistProduct(productItem)} 
          type="button" 
          className="tp-product-details-action-sm-btn"
        >
          <WishlistTwo />
          Add Wishlist
        </button>
        <button type="button" className="tp-product-details-action-sm-btn">
          <AskQuestion />
          Ask a question
        </button>
      </div>
      {/* product-details-action-sm end */}

      {detailsBottom && (
        <DetailsBottomInfo 
          category={category?.name} 
          sku={sku} 
          tag={tags[0]} 
        />
      )}
    </div>
  );
};

export default DetailsWrapper;