import { Mail, Notifications } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserMenu from "./UserMenu";
import { useUserProfile } from "../../customHook/useUserProfile";
import NotificationsMenu from "./NotificationsMenu";

const UserIcons = () => {
  const user = useUserProfile();

  const [anchorUserMenu, setAnchorUserMenu] = useState(null);
  const [anchorNotificationsMenu, setAnchorNotificationsMenu] = useState(null);
  const [mess, setMess] = useState([]);
  useEffect(() => {}, [mess]);
  return (
    <Box>
      <IconButton
        size="large"
        onClick={(e) => setAnchorNotificationsMenu(e.currentTarget)}
      >
        <Badge color="error" badgeContent={mess?.length}>
          <Notifications />
        </Badge>
      </IconButton>
      <Tooltip title="Open User Settings">
        <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
          <Avatar src={user?.avatar} alt={user?.avatar}></Avatar>
        </IconButton>
      </Tooltip>
      <UserMenu {...{ anchorUserMenu, setAnchorUserMenu }} />
      <NotificationsMenu
        {...{
          anchorNotificationsMenu,
          setAnchorNotificationsMenu,
          mess,
          setMess,
        }}
      />
    </Box>
  );
};

export default UserIcons;
