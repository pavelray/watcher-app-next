import { Fragment, useCallback, useEffect, useState } from "react";
import Link from 'next/link';
import Router from 'next/router';
import { APP_NAME } from "../../../utils/constants";

import { style } from "./Navbar.style.js";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const navigateToSearch = useCallback(() => {
    if (searchTerm) Router.push(`/search?query=${searchTerm}&page=1`);
  }, [searchTerm]);

  const navigateToHome = () => {
    Router.push("/");
  };

  const handleMobileMenu = () => {
    const mobileMenu = document.querySelectorAll(".mobile");
    mobileMenu[0].classList.toggle("menu-open");
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        navigateToSearch();
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [navigateToSearch]);

  const mobileMenuClick = () => {
    const mobileMenu = document.querySelectorAll(".mobile");
    mobileMenu[0].classList.toggle("menu-open");
  }

  const handleMenuClick = (e) => {
    // document.querySelectorAll(".menu-item").forEach((el) => {
    //   el.classList.remove("active");
    // });
    // e.target.classList.add("active");
  }

  return (
    <Fragment>
      <div className="navbar">
        <div className="brand-logo">
          <span className="material-symbols-outlined">movie</span>
        </div>
        <div className="brand" onClick={navigateToHome}>
          <span>{APP_NAME}</span>
        </div>
        <div className="search-wrapper">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className="search-wrapper__input"
            placeholder="Search any movie, tv-series or people"
          />
          <button className="search-wrapper__button" onClick={navigateToSearch}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <ul>
          <li className="menu-item" onClick={handleMenuClick}>
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item" onClick={handleMenuClick}>
            <Link href="/movie">Movie</Link>
          </li>
          <li className="menu-item" onClick={handleMenuClick}>
            <Link href="/tv">Tv Series</Link>
          </li>
          <li className="menu-item" onClick={handleMenuClick}>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <button className="hamburger-icon" onClick={handleMobileMenu}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      <div className="mobile">
        <div className="mobile-menu">
          <ul className="menu">
            <li className="menu-item" onClick={mobileMenuClick}>
              <Link href="/">Home</Link>
            </li>
            <li className="menu-item" onClick={mobileMenuClick}>
              <Link href="/movie">Movie</Link>
            </li>
            <li className="menu-item" onClick={mobileMenuClick}>
              <Link href="/tv">TV Series</Link>
            </li>
            <li className="menu-item" onClick={mobileMenuClick}>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default NavBar;
