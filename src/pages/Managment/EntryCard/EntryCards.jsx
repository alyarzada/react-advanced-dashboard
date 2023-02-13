import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useScrollToUp } from "../../../hooks/useScrollToUp";
import { useTranslation } from "react-i18next";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Header from "../../../components/UI/Header";
import CustomSearchFilter from "../../../components/UI/CustomSearchFilter";
import ActionButtons from "../../../components/UI/Buttons/ActionButtons";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import DefaultButton from "../../../components/UI/Buttons/DefaultButton";

const EntryCards = () => {
  const { entryCards } = useSelector((state) => state.entryCards);

  const { t } = useTranslation();
  const navigate = useNavigate();
  useScrollToUp();

  const columns = [
    { field: "type", headerName: t("Type"), width: 250 },
    { field: "reason", headerName: t("Reason"), width: 250 },

    { field: "status", headerName: t("Status"), width: 250, sortable: false },
    {
      field: "created",
      headerName: t("Created"),
      width: 250,
    },
    {
      field: "actions",
      headerName: "",
      width: 250,
      renderCell: (params) => <ActionButtons {...{ params }} />,
    },
  ];

  return (
    <Box className="w-full">
      <Header
        currentPage={{ title: "Access card", icon: CreditCardOutlinedIcon }}
      />

      <Box className="my-4 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box className="py-4 px-6">
          <CustomSearchFilter />
          <Box className="flex flex-col mb-6 sm:flex-row justify-end gap-3 pt-6">
            <DefaultButton
              variant="contained"
              onClick={() => navigate("/user-card-request/access/create")}
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              {t("New Access card")}
            </DefaultButton>
            <DefaultButton
              variant="contained"
              onClick={() => navigate("/user-card-request/parking/create")}
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              {t("New Parking card")}
            </DefaultButton>
          </Box>

          <Box>
            <DataGrid
              rows={entryCards}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[10]}
              autoHeight
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EntryCards;
