import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo></Logo>
        {/* navbtn */}
        <HeaderMenu></HeaderMenu>
        <div className="flex w-auto md:1/3 items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
        </div>
        {/* navadmin */}
      </Container>
    </header>
  );
};

export default Header;
