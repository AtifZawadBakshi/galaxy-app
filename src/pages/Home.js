import HomeSlider from "../components/HomeSlider/HomeSlider";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import MobileTabs from "../components/Mobile/MobileTabs";
import SearchDrawer from "../components/SearchDrawer/SearchDrawer";
import TopSells from "../components/TopsellTab/TopSells";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import MobileMenu from "../layouts/MobileMenu/MobileMenu";
import ScollTop from "../layouts/ScollTop/ScollTop";
import TopHeader from "../layouts/TopHeader/TopHeader";

const Home = () => {
  return (
    <div className="pageWrapper">
      <SearchDrawer />
      <TopHeader />
      <Header />
      <MobileMenu />
      {/*Body Content*/}
      <div id="page-content">
        <HomeSlider />
        <ImageBanner />
        <TopSells />
        <MobileTabs />
      </div>
      {/*End Body Content*/}
      <Footer />
      <ScollTop />
    </div>
  );
};

export default Home;
