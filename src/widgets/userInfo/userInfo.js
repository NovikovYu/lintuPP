import styles from "./userInfo.module.scss";
import { useEffect, useState } from "react";
import * as React from "react";
import {

  Box,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { t } = useTranslation();

  const [userInfo, setUserInfo] = useState();
  const [rowNamesArray, setRowNamesArray] = useState();
  const [isPageAvalible, setIsPageAvalible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setUserInfo(userData);
      setRowNamesArray(Object.keys(userData).slice(0, 4));
    } catch (e) {
      setIsPageAvalible(false);
    }
  }, []);

  if (!isPageAvalible) {
    return navigate("/")
  }

  return (
    <div className={styles["userInfo"]}>
      <h1 className={styles["userInfo__title"]}>{t("User info")}</h1>

      <Box sx={{ overflow: "auto" }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "540px",
            margin: "0 auto",
            display: "table",
            tableLayout: "fixed",
          }}
        >
          <Table>
            <TableBody>
              {rowNamesArray &&
                rowNamesArray.map((rowName) => {
                  return (
                    <TableRow hover key={rowName}>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box sx={{ ml: 1 }}>
                            <Link
                              color={"inherit"}
                              variant={"subtitle2"}
                              component={"a"}
                              sx={{ cursor: "pointer" }}
                            >
                              {t(rowName)}
                            </Link>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>{userInfo[rowName]}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </div>
  );
};

export default UserInfo;
