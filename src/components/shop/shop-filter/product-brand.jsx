import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
// internal
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";

const ProductBrand = ({setCurrPage,shop_right=false}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // handle brand route 
  const handleBrandRoute = () => {
    setCurrPage(1);
    router.push(
      `/${shop_right?'shop-right-sidebar':'shop'}?brand=onewoodcraft`
    )
    dispatch(handleFilterSidebarClose());
  }

  return (
    <>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Brand</h3>
        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-brand-list">
            <div className="tp-shop-widget-brand-item">
              <a onClick={handleBrandRoute} style={{ cursor: "pointer" }}>
                OneWoodCraft
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBrand;
