'use client';
import { useState } from "react";
// internal
import { Search } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";

const HeaderSearchForm = () => {
  const { setSearchText, setCategory, handleSubmit, searchText } = useSearchFormSubmit();

  // selectHandle
  const selectCategoryHandle = (e) => {
    setCategory(e.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-header-search-wrapper d-flex align-items-center">
        <div className="tp-header-search-box">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search for Products..."
          />
        </div>
        <div className="tp-header-search-category">
          <NiceSelect
            options={[
              { value: "Select Category", text: "Select Category" },
              { value: "kitchenware", text: "Kitchenware" },
              { value: "tableware", text: "Tableware" },
              { value: "serveware", text: "Serveware" },
              { value: "decor", text: "Decor" },
              { value: "furniture", text: "Furniture" },
              { value: "lighting", text: "Lighting" },
            ]}
            defaultCurrent={0}
            onChange={selectCategoryHandle}
            name="Select Category"
          />
        </div>
        <div className="tp-header-search-btn">
          <button type="submit">
            <Search />
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeaderSearchForm;
