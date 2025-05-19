import React from "react";
import { useDispatch } from "react-redux";
// internal
import { Filter } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import { handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";
import { useGetShowCategoryQuery } from "@/redux/features/categoryApi";

const ShopTopRight = ({ selectHandleFilter, selectHandleCategory, selectedCategory }) => {
  const dispatch = useDispatch();
  const { data: categories, isLoading } = useGetShowCategoryQuery();

  // Prepare category options
  const categoryOptions = [
    { value: '', text: 'All Categories' },
    ...(categories?.result?.map((cat) => ({
      value: cat.parent,
      text: cat.parent,
    })) || [])
  ];

  // Find the current selected index for NiceSelect
  const currentCategoryIndex = categoryOptions.findIndex(
    (opt) => opt.value === (selectedCategory || '')
  );

  return (
    <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
      <div className="tp-shop-top-select me-2">
        <NiceSelect
          options={categoryOptions}
          defaultCurrent={currentCategoryIndex === -1 ? 0 : currentCategoryIndex}
          onChange={selectHandleCategory}
          name="Category"
        />
      </div>
      <div className="tp-shop-top-select me-2">
        <NiceSelect
          options={[
            { value: "Default Sorting", text: "Default Sorting" },
            { value: "Low to High", text: "Low to High" },
            { value: "High to Low", text: "High to Low" },
            { value: "New Added", text: "New Added" },
            { value: "On Sale", text: "On Sale" },
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name="Default Sorting"
        />
      </div>
      <div className="tp-shop-top-filter">
        <button onClick={() => dispatch(handleFilterSidebarOpen())} type="button" className="tp-filter-btn">
          <span>
            <Filter />
          </span>
          {" "}Filter
        </button>
      </div>
    </div>
  );
};

export default ShopTopRight;
