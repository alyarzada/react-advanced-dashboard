import { useSelector, useDispatch } from "react-redux";
import { Settings } from "../sidebar/Settings";
import { setOpenedSidebar } from "../../app/Slicers/themes";
import { Box, IconButton } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuIcon from "@mui/icons-material/Menu";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";
import RestaurantCard from "./RestaurantCard";
import { setSideabarSubmenu } from "../../app/Slicers/themes";

const Header = () => {
  const { openedSidebar, boxed, showCardIcon } = useSelector(
    (state) => state.themes
  );
  const dispatch = useDispatch();

  return (
    <header
      className={`print:hidden flex top-0 px-3 sm:px-5 transition-all ease-in-out duration-300 h-[70px] z-30  drop-shadow-lg bg-bgLight dark:bg-bgMain ${
        openedSidebar
          ? "left-0 md:left-[250px] exl:left-[300px] header-width-open"
          : "left-0 md:left-[80px] header-width-close"
      } 
      } ${boxed ? "absolute" : "fixed"}`}
    >
      <nav className={`flex items-center w-full justify-between`}>
        <IconButton
          className="cursor-pointer text-bgSecond dark:text-text1"
          onClick={() => {
            dispatch(setOpenedSidebar());
            dispatch(
              setSideabarSubmenu({
                open: false,
                id: null,
              })
            );
          }}
        >
          <MenuIcon className="text-textDark2" />
        </IconButton>

        <Box className="flex items-center sm:gap-x-5">
          <LanguageSwitcher />
          <Notifications />
          <Settings />

          {showCardIcon ? <RestaurantCard /> : null}
          <UserMenu />
        </Box>
      </nav>
    </header>
  );
};

export default Header;