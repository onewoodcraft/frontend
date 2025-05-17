'use client';
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Link from "next/link";
// internal
import { formatPriceINR } from "@/utils/price-formatter";
import { remove_product } from "@/redux/features/cartSlice";

const CartItem = ({ item }) => {
  const { _id, img, title, price, quantity } = item || {};
  const dispatch = useDispatch();

  // handle remove product
  const handleRemovePrd = (prd) => {
    dispatch(remove_product(prd));
  };

  return (
    <tr>
      {/* img */}
      <td className="tp-cart-img">
        <Link href={`/product-details/${_id}`}>
          <Image src={img} alt="product img" width={70} height={100} />
        </Link>
      </td>
      {/* title */}
      <td className="tp-cart-title">
        <Link href={`/product-details/${_id}`}>{title}</Link>
      </td>
      {/* price */}
      <td className="tp-cart-price">
        <span>{formatPriceINR(price)}</span>
      </td>
      {/* quantity */}
      <td className="tp-cart-quantity">
        <div className="tp-product-quantity mt-10 mb-10">
          <span>{quantity}</span>
        </div>
      </td>
      {/* price */}
      <td className="tp-cart-price">
        <span>{formatPriceINR(price * quantity)}</span>
      </td>
      {/* action */}
      <td className="tp-cart-action">
        <button
          onClick={() => handleRemovePrd(item)}
          className="tp-cart-action-btn"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z"
              fill="currentColor"
            />
          </svg>
          <span>Remove</span>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
