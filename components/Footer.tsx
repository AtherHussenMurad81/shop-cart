import React from "react";
import Container from "./Container";
import { FooterTop } from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="mb-40">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 ">
            <Logo spanDesign="font-bold text-lg" />
            <p className="">
              Discover curated furniture collections at Shopcartyt, blending
              style and confort to elevate your living spaces
            </p>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
