import styles from "./e404.module.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const E404Page = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["e404"]}>
      <h1 className={styles["e404__title"]}>{t("404 not found")}</h1>

      <p className={styles["e404__text"]}>
        {t("Woops. Looks like this page doesn't exist.")}
      </p>
      
      <Link className={styles["e404__link"]} to="/">
        {t("To home page")}
      </Link>
    </div>
  );
};

export default E404Page;
