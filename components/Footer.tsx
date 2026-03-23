import React from "react";
import Container from "./Container";
import { FooterTop } from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Subtext, SubTitle } from "./ui/text";
import { quickLinksData } from "@/constants/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-40">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 ">
            <Logo spanDesign="font-bold text-lg" />
            <Subtext className="">
              Discover curated furniture collections at Shopcartyt, blending
              style and confort to elevate your living spaces
            </Subtext>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul>
              {quickLinksData?.map((item, index) => (
                <li key={index}>
                  <Link href={item?.href}>{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
