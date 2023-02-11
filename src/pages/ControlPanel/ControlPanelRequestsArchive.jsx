import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllRequests } from "../../app/Slicers/requests";
import Cookies from "js-cookie";

const ControlPanelRequestsArchive = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { allRequests } = useSelector((state) => state.requests);
  const [lastRequests, setLastRequests] = useState([]);

  useEffect(() => {
    dispatch(getAllRequests(Cookies.get("token")));
  }, []);

  useEffect(() => {
    if (allRequests.length > 0) {
      setLastRequests(allRequests?.slice(0, 5));
    }
  }, [allRequests]);

  return (
    <Box className="p-4 bg-gradient-to-r rounded-xl	mb-6">
      <Typography className="text-slate-400	font-bold	text-lg mb-10	">
        {t("Archive of Requests")}
      </Typography>
      <Box>
        <TableContainer className="bg-gradient-to-r" component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell className="w-[15%]">{t("Applicant")}</TableCell>
                <TableCell>{t("Request")}</TableCell>
                <TableCell className="w-[15%]">{t("Start date")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lastRequests?.length > 0
                ? lastRequests.map((request, index) => (
                    <TableRow
                      key={request.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      className="h-12"
                    >
                      <TableCell className="w-[1px]" component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <Link to="/">{request.userData.name}</Link>
                      </TableCell>
                      <TableCell>
                        <Link to="/">{request.message}</Link>
                      </TableCell>
                      <TableCell>{request.last_message_date}</TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ControlPanelRequestsArchive;
