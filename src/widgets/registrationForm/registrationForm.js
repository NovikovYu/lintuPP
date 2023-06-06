import React from "react";
import styles from "./registrationForm.module.scss";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { registrationValidationSchema } from "./registrationValidationSchema";

export const RegistrationForm = () => {
  const updateFieldValue = (
    setFieldValue,
    e
  ) => {
    setFieldValue(
      e.target.name,
      e.target.name === "termsAndConditions" ? true : e.target.value
    );
  };

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className={styles["registration-form"]}>

      <h1 className={styles["registration-form__title"]}>{t("Sign Up")}</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          passwordSubmit: "",
          termsAndConditions: false,
        }}
        validationSchema={registrationValidationSchema}
        onSubmit={(values) => {
          localStorage.setItem("userData", JSON.stringify(values));
          navigate("/userInfo");
          window.location.reload();
        }}
      >
        {({ errors, touched, values, setFieldValue, setFieldTouched }) => (
          <Form className={styles["registration-form__inner"]}>
            <TextField
              className={styles["registration-form__input"]}
              name="firstName"
              onChange={(e) =>
                updateFieldValue(
                  setFieldValue,
                  e
                )
              }
              label={t("First name")}
              variant="outlined"
              error={errors.firstName && touched.firstName}
              helperText={
                errors.firstName && touched.firstName
                  ? t(errors.firstName)
                  : "  "
              }
            />

            <TextField
              className={styles["registration-form__input"]}
              name="lastName"
              onChange={(e) =>
                updateFieldValue(
                  setFieldValue,
                  e
                )
              }
              label={t("Last name")}
              variant="outlined"
              error={errors.lastName && touched.lastName}
              helperText={
                errors.lastName && touched.lastName ? t(errors.lastName) : "  "
              }
            />

            <TextField
              className={styles["registration-form__input"]}
              name="email"
              onChange={(e) =>
                updateFieldValue(
                  setFieldValue,
                  e
                )
              }
              label={t("Email")}
              variant="outlined"
              error={errors.email && touched.email}
              helperText={
                errors.email && touched.email ? t(errors.email) : "  "
              }
            />

            <TextField
              className={styles["registration-form__input"]}
              name="phone"
              onChange={(e) =>
                updateFieldValue(
                  setFieldValue,
                  e
                )
              }
              label={t("Phone")}
              variant="outlined"
              error={errors.phone && touched.phone}
              helperText={
                errors.phone && touched.phone ? t(errors.phone) : "  "
              }
            />

            <TextField
              className={styles["registration-form__input"]}
              name="password"
              type="password"
              onChange={(e) =>
                updateFieldValue(
                  setFieldValue,
                  e
                )
              }
              label={t("Password")}
              variant="outlined"
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password ? t(errors.password) : "  "
              }
            />

            <TextField
              className={styles["registration-form__input"]}
              name="passwordSubmit"
              type="password"
              onChange={(e) =>
                updateFieldValue(
                  setFieldValue,
                  e
                )
              }
              label={t("Password submit")}
              variant="outlined"
              error={errors.passwordSubmit && touched.passwordSubmit}
              helperText={
                errors.passwordSubmit && touched.passwordSubmit
                  ? t(errors.passwordSubmit)
                  : "  "
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="termsAndConditions"
                  onChange={(e) =>
                    updateFieldValue(
                      setFieldValue,
                      e
                    )
                  }
                />
              }
              label={t("I accept terms and condition")}
            />
            {errors.termsAndConditions && touched.termsAndConditions && (
              <p className={styles["registration-form__input-error"]}>
                {t(errors.termsAndConditions)}
              </p>
            )}

            <Button variant="contained" type="submit">
              {t("Submit")}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
