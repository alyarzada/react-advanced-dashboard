// Tunar
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedSidebar } from "../../app/Slicers/themes";
import { useMediaQuery, Box } from "@mui/material";
import ManagmentSubMenuItem from "./ManagmentSubMenuItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SidebarItem = ({ sidebarItem, Icon }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [linksHeight, setLinksHeight] = useState(0);
  const { openedSidebar } = useSelector((state) => state.themes);
  const { t } = useTranslation();

  const matches = useMediaQuery("(max-width:768px)");
  const dispatch = useDispatch();
  const linkRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    if (sidebarItem.sublist) {
      setLinksHeight(linkRef.current.getBoundingClientRect().height);
    }
  }, [openSubMenu]);

  return (
    <li className={`text-gray-400 ${!openedSidebar && "group relative"}`}>
      <Link
        className={`hover:text-text1 flex gap-x-3 shrink-0 flex-nowrap basis-0 whitespace-nowrap items-center py-3  ${
          openedSidebar
            ? "text-text2 group hover-effect rounded w-[90%] mx-auto px-4"
            : "relative group px-7"
        }`}
        to={sidebarItem.path ? sidebarItem.path : ""}
        onClick={(e) => {
          if (!sidebarItem.path) {
            e.preventDefault();
            if (openedSidebar) setOpenSubMenu((prev) => !prev);
          }
          if (sidebarItem.path) matches && dispatch(setOpenedSidebar());
        }}
      >
        <Icon className="w-[20px] group-hover:text-white" />
        {openedSidebar ? (
          <motion.div
            className="text-[15px] w-full flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t(sidebarItem.title)}
            {!sidebarItem.path && (
              <ChevronRightIcon
                className={
                  openSubMenu
                    ? "rotate-90 text-white transition-transform duration-500"
                    : "rotate-0 text-white transition-transform duration-500"
                }
              />
            )}
          </motion.div>
        ) : (
          <Box className="text-[15px] opacity-0 invisible -translate-x-5  text-center text-white bg-logoColor w-40 p-3 h-[44px] absolute top-0 left-[85px] rounded group-hover:translate-x-0 group-hover:visible group-hover:ease-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-[400ms]">
            {t(sidebarItem.title)}
          </Box>
        )}
      </Link>
      {sidebarItem.sublist ? (
        <Box
          className={`overflow-hidden transition-all duration-300 ${
            openSubMenu ? "h-[" + linksHeight + "px" + "]" : "h-0"
          }`}
          ref={linksContainerRef}
        >
          <ul
            ref={linkRef}
            className={
              !openedSidebar
                ? `invisible fit-content opacity-0 -translate-x-5 ${
                    sidebarItem.sublist.length > 0 &&
                    "group-hover:visible group-hover:transition-all group-hover:ease-out group-hover:opacity-100 group-hover:duration-[400ms] group-hover:translate-x-0 absolute rounded top-0 left-[85px] w-fit p-2 bg-logoColor"
                  }`
                : null
            }
          >
            {sidebarItem.sublist.map((sublistItem, index) => {
              const Icon = sublistItem.icon;
              return (
                <ManagmentSubMenuItem
                  ref={{
                    linkRef,
                    linksContainerRef,
                  }}
                  parentHeight={setLinksHeight}
                  key={index}
                  sublistItem={sublistItem}
                  Icon={Icon}
                />
              );
            })}
          </ul>
        </Box>
      ) : null}
    </li>
  );
};

export default SidebarItem;
