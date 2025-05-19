import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '@/redux/features/cartSlice';
import { add_to_wishlist } from '@/redux/features/wishlistSlice';
import { useRouter } from 'next/navigation';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductItem = ({ product, style_2 = false }) => {
  const { _id, title, img, price, discount, reviews } = product || {};
  const dispatch = useDispatch();
  const router = useRouter();

  // handle add to cart
  const handleAddToCart = (product) => {
    dispatch(add_to_cart(product));
  };

  // handle add to wishlist
  const handleAddToWishlist = (product) => {
    dispatch(add_to_wishlist(product));
  };

  return (
    <div className={`tp-product-item ${style_2 ? 'tp-product-item-2' : ''} mb-50`}>
      <div className="tp-product-thumb p-relative z-index-1 fix">
        <Link href={`/product-details/${_id}`}>
          <Image src={img} alt="product img" width={300} height={300} />
        </Link>
        {/* product action */}
        <div className="tp-product-action">
          <div className="tp-product-action-item d-flex flex-column">
            <button
              type="button"
              className="tp-product-action-btn tp-product-add-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              <ShoppingCart />
              <span className="tp-product-tooltip">Add to Cart</span>
            </button>
            <button
              type="button"
              className="tp-product-action-btn tp-product-add-wishlist-btn"
              onClick={() => handleAddToWishlist(product)}
            >
              <Heart />
              <span className="tp-product-tooltip">Add to Wishlist</span>
            </button>
          </div>
        </div>
        {/* product badge */}
        {discount > 0 && (
          <div className="tp-product-badge">
            <span className="tp-product-badge-tag">-{discount}%</span>
          </div>
        )}
      </div>
      <div className="tp-product-content">
        <div className="tp-product-category">
          <Link href="/shop">Beauty</Link>
        </div>
        <h3 className="tp-product-title">
          <Link href={`/product-details/${_id}`}>{title}</Link>
        </h3>
        <div className="tp-product-rating d-flex align-items-center">
          <div className="tp-product-rating-icon">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                <i className="fas fa-star"></i>
              </span>
            ))}
          </div>
          <div className="tp-product-rating-text">
            <span>({reviews?.length || 0} Review)</span>
          </div>
        </div>
        <div className="tp-product-price-wrapper">
          <span className="tp-product-price">${price.toFixed(2)}</span>
          {discount > 0 && (
            <span className="tp-product-price-old">
              ${((price * (100 + discount)) / 100).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem; 