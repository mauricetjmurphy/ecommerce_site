import * as React from "react";

import { ContentLayout } from "../../../components/Layout";
import { WishlistItems } from "../components/WishlistList";

import { WhishlistContainer } from "./wishlist.styles";

type Props = {};

export const Wishlist = (props: Props) => {
  return (
    <ContentLayout title="Whishlist Page">
      <WhishlistContainer>
        <WishlistItems />
      </WhishlistContainer>
    </ContentLayout>
  );
};
