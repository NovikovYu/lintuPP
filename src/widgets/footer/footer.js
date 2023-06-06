import React from "react";
import Logo from "../../assets/logo.svg";
import styles from "./footer.module.scss";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

const lngs = {
  en: { nativeName: "English" },
  ru: { nativeName: "Русский" },
};

const Footer = () => {
  const { t, i18n } = useTranslation();

  const links = [
    { name: "News", link: "l1" },
    { name: "History of the company", link: "l2" },
    { name: "Public offer", link: "l1" },
    { name: "Customer Service", link: "l2" },
    { name: "Press Service", link: "l1" },
    { name: "Wholesale", link: "l2" },
  ];

  return (
    <footer className={styles["footer"]}>
      <Link className={styles["footer__logo-wrapper"]} to="/">
        <img className={styles["footer__logo"]} src={Logo} alt="логотип FA" />
      </Link>

      <ul className={styles["nav"]}>
        {links.map((el) => {
          return (
            <li className={styles["nav__item"]} key={el.name}>
              <Link className={styles["nav__link"]} to={el.link}>
                {t(el.name)}
              </Link>
            </li>
          );
        })}
        
      </ul>

      <Select
        defaultValue="en"
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
          console.log(e.target.value);
        }}
      >
        {Object.keys(lngs).map((lng) => (
          <MenuItem
            key={lng}
            value={lng}
          >
            {lngs[lng].nativeName}
          </MenuItem>
        ))}
      </Select>
    </footer>
  );
};

export default Footer;
