import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
// import { SignIn } from "./SignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignIn, UserButton, useUser } from "@clerk/nextjs";
import {} from "@clerk/nextjs";
import { Login } from "./LogIn";
const Header = async () => {
  const user = await currentUser();
  const falseUser = await useUser();
  console.log("false user", falseUser);
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center gap-2.5 justify-start">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo spanDesign="font-bold text-lg" />
        </div>

        <HeaderMenu />

        <div className="flex w-auto md:w-1/3 items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />

          <ClerkLoaded>{!user ? <Login /> : <UserButton />}</ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
