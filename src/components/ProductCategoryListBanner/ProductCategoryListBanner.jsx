import React from "react";

const ProductCategoryListBanner = () => {
  return (
    <div className="collection-header">
      <div className="collection-hero">
        <div className="collection-hero__image">
          <img
            className="blur-up lazyload"
            data-src="https://images.samsung.com/bd/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_banner_ar.jpg"
            src="https://images.samsung.com/bd/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_banner_ar.jpg"
            alt="Women"
            title="Women"
          />
        </div>
        <div className="collection-hero__title-wrapper">
          <h1 className="collection-hero__title page-width">Smartphones</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryListBanner;
