import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, Outlet } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { requestPanels } from "../../../data/apartment-owner/request-data";
import GoBackButton from "../../../components/UI/GoBackButton";
import Header from "../../../components/UI/Header";

import { useSelector, useDispatch } from "react-redux";
import { getAllRequests, getMyRequests } from "../../../app/Slicers/requests";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import Cookies from "js-cookie";
import DefaultButton from "../../../components/UI/Buttons/DefaultButton";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import DefaultButton from "../../../components/UI/Buttons/DefaultButton";

const Requests = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (role_id === 8) {
      dispatch(getMyRequests(Cookies.get("token")));
    } else {
      dispatch(getAllRequests(Cookies.get("token")));
    }
  }, []);

  return (
    <Box className="w-full">
      <Header currentPage={{ title: "Requests", icon: CommentOutlinedIcon }} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="mb-6"
      >
        <FormControl variant="standard" className="w-1/5">
          <InputLabel id="demo-simple-select-standard-label">
            Müraciətin növü
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={panel}
            onChange={(event) => setPanel(event.target.value)}
            label="Müraciətin növü"
          >
            {requestPanels.map((panel) => (
              <MenuItem
                onClick={() => {
                  setActive(panel.id);
                  navigate(`${panel.path}/${panel.type}`);
                }}
                value={panel.title}
                key={panel.id}
              >
                {t(panel.title)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DefaultButton
          startIcon={<AddCircleOutlineOutlinedIcon />}
          variant="contained"
          onClick={() => navigate("/requests/createnewrequest")}
        >
          {t("New Request")}
        </DefaultButton>
      </Stack>
      <Stack direction={{ xs: "column-reverse", lg: "row" }} spacing={2}>
        <Box
          className="w-full lg:w-[24%] rounded p-6 text-textDark bg-bgLight  drop-shadow-lg hover:drop-shadow-xl 
              dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary dark:text-white"
        >
          {/* <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            className="w-full capitalize"
            variant="contained"
            onClick={() => navigate("/requests/createnewrequest")}
          >
            {t("New Request")}
           </Button>*/}
          <DefaultButton
            variant="contained"
            onClick={() => navigate("/requests/createnewrequest")}
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            {t("New Request")}
          </DefaultButton>
          <List>
            {requestPanels.map((panel) => {
              const Icon = panel.icon;
              return (
                <ListItem key={panel.id} className="p-0">
                  <ListItemButton
                    className={`rounded ${
                      active === panel.id ? "bg-[#ffffff14]" : ""
                    }`}
                    onClick={() => {
                      setActive(panel.id);
                      navigate(`${panel.path}/${panel.type}`);
                    }}
                  >
                    <Icon>{panel.icon}</Icon>
                    <ListItemText className="ml-3" primary={t(panel.title)} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box className="flex-1">
          <Outlet active={active} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Requests;
