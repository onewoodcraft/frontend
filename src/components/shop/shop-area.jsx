'use client'
import React, { useState,useEffect } from "react";
import {useSearchParams, useRouter} from 'next/navigation';
import ShopLoader from "../loader/shop/shop-loader";
import ErrorMsg from "../common/error-msg";
import ShopFilterOffCanvas from "../common/shop-filter-offcanvas";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import ShopContent from "./shop-content";

const ShopArea = ({shop_right=false,hidden_sidebar=false}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get('category');
  const brand = searchParams.get('brand');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const subCategory = searchParams.get('subCategory');
  const filterColor = searchParams.get('color');
  const status = searchParams.get('status');
  const { data: products, isError, isLoading } = useGetAllProductsQuery();
  const [priceValue, setPriceValue] = useState([0, 0]);
  const [selectValue, setSelectValue] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(category || "");

  // Load the maximum price once the products have been loaded
  useEffect(() => {
    if (!isLoading && !isError && Array.isArray(products?.data) && products.data.length > 0) {
      const maxPrice = products.data.reduce((max, product) => {
        return (product?.price || 0) > max ? (product?.price || 0) : max;
      }, 0);
      setPriceValue([0, maxPrice]);
    }
  }, [isLoading, isError, products]);

  // handleChanges
  const handleChanges = (val) => {
    setCurrPage(1);
    setPriceValue(val);
  };

  // selectHandleFilter
  const selectHandleFilter = (e) => {
    setSelectValue(e.value);
  };

  // selectHandleCategory for dropdown
  const selectHandleCategory = (item) => {
    setCurrPage(1);
    setSelectedCategory(item.value);
    if (item.value === "") {
      router.push(`/${shop_right ? 'shop-right-sidebar' : 'shop'}`);
    } else {
      router.push(`/${shop_right ? 'shop-right-sidebar' : 'shop'}?category=${item.value.toLowerCase().replace("&", "").split(" ").join("-")}`);
    }
  };

  // other props
  const otherProps = {
    priceFilterValues: {
      priceValue,
      handleChanges,
      setPriceValue,
    },
    selectHandleFilter,
    currPage,
    setCurrPage,
    selectedCategory,
    selectHandleCategory,
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <ShopLoader loading={isLoading}/>;
  }
  else if (!isLoading && isError) {
    content = <div className="pb-80 text-center">
      <ErrorMsg msg="There was an error loading products" />
    </div>;
  }
  else if (!isLoading && !isError && (!products?.data || !Array.isArray(products.data) || products.data.length === 0)) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  else if (!isLoading && !isError && Array.isArray(products?.data) && products.data.length > 0) {
    // products
    let product_items = [...products.data];

    // select short filtering
    if (selectValue) {
      if (selectValue === "Default Sorting") {
        product_items = [...products.data];
      } else if (selectValue === "Low to High") {
        product_items = product_items
          .slice()
          .sort((a, b) => (a?.price || 0) - (b?.price || 0));
      } else if (selectValue === "High to Low") {
        product_items = product_items
          .slice()
          .sort((a, b) => (b?.price || 0) - (a?.price || 0));
      } else if (selectValue === "New Added") {
        product_items = product_items
          .slice()
          .sort((a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0));
      } else if (selectValue === "On Sale") {
        product_items = product_items.filter((p) => (p?.discount || 0) > 0);
      }
    }

    // status filter
    if (status) {
      if (status === "on-sale") {
        product_items = product_items.filter((p) => (p?.discount || 0) > 0);
      } else if (status === "in-stock") {
        product_items = product_items.filter((p) => p?.status === "in-stock");
      }
    }

    // category filter
    if (category) {
      product_items = product_items.filter(
        (p) => (p?.parent || "").toLowerCase().replace("&", "").split(" ").join("-") === category
      );
    }

    // subcategory filter
    if (subCategory) {
      product_items = product_items.filter(
        (p) => (p?.children || "").toLowerCase().replace("&", "").split(" ").join("-") === subCategory
      );
    }

    // color filter
    if (filterColor) {
      product_items = product_items.filter((product) => {
        if (!Array.isArray(product?.imageURLs)) return false;
        return product.imageURLs.some(img => 
          (img?.color?.name || "").toLowerCase().split(" ").join("-") === filterColor
        );
      });
    }

    // brand filter
    if (brand) {
      product_items = product_items.filter(
        (p) =>
          (p?.brand?.name || "").toLowerCase().split(" ").join("-").replace("&", "") ===
          brand
      );
    }

    if(minPrice && maxPrice){
      product_items = product_items.filter((p) => (Number(p?.price) || 0) >= Number(minPrice) && 
      (Number(p?.price) || 0) <= Number(maxPrice))
    }

    content = (
      <>
        <ShopContent 
          all_products={products.data}
          products={product_items}
          otherProps={otherProps}
          shop_right={shop_right}
          hidden_sidebar={hidden_sidebar}
          selectedCategory={selectedCategory}
          selectHandleCategory={selectHandleCategory}
        />
        
         <ShopFilterOffCanvas
          all_products={products.data}
          otherProps={otherProps}
        /> 
      </>
    );
  }

  return (
    <>
      {content}
    </>
  );
};

export default ShopArea;
