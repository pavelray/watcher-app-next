import { Fragment, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { APP_NAME, LOGO_IMAGE_PATH, MENUS } from "../../../utils/constants";
import { getUid } from "../../../utils/helperMethods";
import { style } from "./Navbar.style.js";
import navStyle from "./Navbar.module.scss";
import Image from "next/image";

const NavBar = ({ isMobile }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const navigateToSearch = useCallback(() => {
    if (searchTerm) Router.push(`/search?term=${searchTerm}&page=1`);
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
  };

  const getActiveMenuClassName = (menu) => {
    if (menu.text === "Home")
      return currentRoute === menu.link ? "menu-item active" : "menu-item";
    return currentRoute.includes(menu.link) ? "menu-item active" : "menu-item";
  };

  return (
    <Fragment>
      <div className="navbar">
        <div className="brand-logo"></div>
        <div className="brand" onClick={navigateToHome}>
          <Image
            src={LOGO_IMAGE_PATH}
            alt={`${APP_NAME} logo`}
            title={APP_NAME}
            width={isMobile ? 60 : 100}
            height={isMobile ? 40 : 65}
          />
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
            <Image
              src="/icons/common/search.png"
              alt=""
              width={30}
              height={30}
              title="Search"
            />
          </button>
        </div>
        <ul>
          {MENUS.map((menu) => (
            <li key={getUid()} className={getActiveMenuClassName(menu)}>
              <Link href={menu.link}>{menu.text}</Link>
            </li>
          ))}
          {/* <li
            className={currentRoute === "/" ? "menu-item active" : "menu-item"}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              currentRoute.includes("/movie") ? "menu-item active" : "menu-item"
            }
          >
            <Link href="/movie">Movie</Link>
          </li>
          <li
            className={
              currentRoute.includes("/tv") ? "menu-item active" : "menu-item"
            }
          >
            <Link href="/tv">Tv Series</Link>
          </li>
          <li
            className={
              currentRoute.includes("/genre") ? "menu-item active" : "menu-item"
            }
          >
            <Link href="/genre">Genre</Link>
          </li>
          <li
            className={
              currentRoute === "/about" ? "menu-item active" : "menu-item"
            }
          >
            <Link href="/about">About</Link>
          </li> */}
        </ul>
        <button className="hamburger-icon" onClick={handleMobileMenu}>
          <Image
            src="/icons/common/menu.png"
            alt=""
            width={35}
            height={35}
            title="Show Menu"
          />
        </button>
      </div>
      <div className="mobile">
        <div className="mobile-menu">
          <ul className="menu">
            <li className="menu-item" onClick={mobileMenuClick}>
              <Link href="/" className={navStyle.menuLink}>
                Home
              </Link>
            </li>
            <li className="menu-item" onClick={mobileMenuClick}>
              <Link href="/movie" className={navStyle.menuLink}>
                Movie
              </Link>
            </li>
            <li className="menu-item" onClick={mobileMenuClick}>
              <Link href="/tv" className={navStyle.menuLink}>
                TV Series
              </Link>
            </li>
            <li className="menu-item" onClick={mobileMenuClick}>
              <Link href="/about" className={navStyle.menuLink}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default NavBar;
