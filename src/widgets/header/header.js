import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

let cx = classNames.bind(styles);

const Header = () => {
  const [isMenuClose, setIsMenuClose] = useState(true);
  const [isLogOutBntVisible, setIsLogOutBntVisible] = useState(false)
  
  useEffect(() => {
    checkLS()
  }, [])

  const checkLS = () => {
    try {
      const userInfo = localStorage.getItem('userData')
  
      if(userInfo) {
        setIsLogOutBntVisible(true)
      } else {
        setIsLogOutBntVisible(false)
      }

    } catch (e) {
      console.log(e)
    }
  }

  let navClassName = cx({
    nav: true,
    close: isMenuClose,
  });
  

  const { t, i18n } = useTranslation();

  return (
    <header className={styles["header"]}>
      <Link className={styles["header__logo-wrapper"]} to="/">
        <img className={styles["header__logo"]} src={Logo} alt="логотип FA" />
      </Link>

      {isLogOutBntVisible && <Button
        className={styles["log-out-btn"]}
        variant="contained"
        onClick={() => {
          localStorage.clear("userData");
          window.location.reload();
        }}
        type="button"
      >
        {t("Log Out")}
      </Button>}

      <button
        className={styles["menu-switcher"]}
        onClick={() => setIsMenuClose(!isMenuClose)}
      >
        {isMenuClose ? 'M' : 'X'}
      </button>

      <nav className={navClassName}>
        <ul className={styles["nav__list"]}>
          <li className={styles["nav__item"]}>
            <Link className={styles["nav__link"]} to="/about">
              {t("About")}
            </Link>
          </li>
          <li className={styles["nav__item"]}>
            <Link className={styles["nav__link"]} to="/products">
              {t("Products")}
            </Link>
          </li>
          <li className={styles["nav__item"]}>
            <Link className={styles["nav__link"]} to="/contacts">
              {t("Contacts")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
