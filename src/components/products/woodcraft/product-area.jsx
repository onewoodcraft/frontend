'use client';
import React, { useState } from 'react';
import ErrorMsg from '@/components/common/error-msg';
import { useGetAllProductsQuery } from '@/redux/features/productApi';
import { TextShapeLine } from '@/svg';
import ProductItem from './product-item';
import { HomeTwoPrdLoader } from '@/components/loader';

// tabs
const tabs = ["All Collection", "Furniture", "Decor", "Accessories"];

const ProductArea = () => {
  const { data: products, isError, isLoading } = useGetAllProductsQuery();
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeTwoPrdLoader loading={isLoading} />
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    content = <>
      <div className="row">
        {products.data.map((prd) => (
          <div key={prd._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <ProductItem product={prd} />
          </div>
        ))}
      </div>
    </>
  }
  return (
    <>
      <section className="tp-product-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-2 text-center mb-35">
                <span className="tp-section-title-pre-2">
                  Handcrafted Collection
                  <TextShapeLine />
                </span>
                <h3 className="tp-section-title-2">Exclusive Woodcraft Masterpieces</h3>
              </div>
            </div>
          </div>
          {content}
        </div>
      </section>
    </>
  );
};

export default ProductArea;