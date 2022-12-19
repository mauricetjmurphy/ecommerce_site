import * as React from "react";

import { Carousel } from "../components/Carousel/Carousel";
import { TextSection } from "../../../components/TextSection/TextSection";
import { ProductList } from "../../../components/ProductList";
import { Banner } from "../components/Banner/Banner";
import { images } from "../../../assets/images/home";
import { ShopCategoryList } from "../components/ShopCategoryList/ShopCategoryList";

import { HomePageContainer } from "./home.styles";
import { homePageData } from "./home.data";

export const Home = () => {
  return (
    <HomePageContainer>
      <Carousel />
      <TextSection body={homePageData.textSection1} />
      <ProductList
        numberOfItems={4}
        pageButtons={false}
        title={"Bestsellers"}
      />
      <Banner height={"500px"} images={images.banner} />
      <ShopCategoryList categories={images.categories} />
    </HomePageContainer>
  );
};
