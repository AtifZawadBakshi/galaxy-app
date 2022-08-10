import React from "react";
import styled from "styled-components";
import ProductCategoryListBanner from "../components/ProductCategoryListBanner/ProductCategoryListBanner";
import ProductCategoryListContent from "../components/ProductCategoryListContent/ProductCategoryListContent";
import ProductCategoryListSidebar from "../components/ProductCategoryListSidebar/ProductCategoryListSidebar";
import SearchDrawer from "../components/SearchDrawer/SearchDrawer";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import MobileMenu from "../layouts/MobileMenu/MobileMenu";
import ScollTop from "../layouts/ScollTop/ScollTop";
import TopHeader from "../layouts/TopHeader/TopHeader";
const Container = styled.div`
  margin: 80px;
`;
const ProductCategoryList = ({ category }) => {
  console.log(category);
  return (
    <div className="pageWrapper">
      <SearchDrawer />
      <TopHeader />
      <Header />
      <MobileMenu />
      {/*Body Content*/}
      <div id="page-content">
        <ProductCategoryListBanner />
        <Container>
          <div className="row mt-5">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 ">
              <ProductCategoryListSidebar />
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">
              <ProductCategoryListContent />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
      <ScollTop />
    </div>
  );
};

export default ProductCategoryList;
