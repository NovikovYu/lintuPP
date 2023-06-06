import styles from "./hero.module.scss";
import React, { useState } from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import RegistrationForm from "../registrationForm/registrationForm";

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { t } = useTranslation();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles["hero"]}>
      <h1 className={styles["hero__title"]}>
        {t("Lorem ipsum dolor sit amet consectetur")}
      </h1>

      <p className={styles["hero__text"]}>
      {t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga quae quos? Corporis tenetur sed obcaecati facilis quos commodi, recusandae nostrum, voluptatem, quisquam aliquam quod. Ex culpa animi aperiam atque!")}
      </p>

      <Button variant="contained" onClick={openModal}>
        {t("Sign Up")}
      </Button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <RegistrationForm />
      </Modal>
    </div>
  );
};

export default Hero;
