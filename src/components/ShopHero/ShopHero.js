import React from "react";
import {
  ShopHeroContainer,
  ShopHeroBg,
  ShopVideoBg,
  ShopHeroContent,
  ShopHeroContentInner,
  ShopHeroHeading,
  ShopHeroSubHeading,
  ShopHeroText,
  ShopHeroMobileTitle,
  ShopHeroMobileText,
  P,
} from "./ShopHeroStyled.js"; //importing its style
import { shopdata } from "./ShopHeroData.js";

const ShopHero = () => {
  return (
    <ShopHeroContainer id={shopdata.id}>
      <ShopHeroBg>
        <ShopVideoBg
          autoPlay
          loop
          muted
          src={shopdata.video}
          type={shopdata.type}
        />
      </ShopHeroBg>
      <ShopHeroContent>
        <ShopHeroContentInner>
          <ShopHeroHeading>{shopdata.heroHeading}</ShopHeroHeading>
          <ShopHeroSubHeading>{shopdata.subHeroHeading}</ShopHeroSubHeading>
          <ShopHeroText>{shopdata.heroText}</ShopHeroText>
          <ShopHeroMobileTitle>{shopdata.heroHeading}</ShopHeroMobileTitle>
          <ShopHeroMobileText>
            <P>{shopdata.subHeroHeading}</P>
            <P>{shopdata.heroText}</P>
          </ShopHeroMobileText>
        </ShopHeroContentInner>
      </ShopHeroContent>
    </ShopHeroContainer>
  );
};
export default ShopHero;
