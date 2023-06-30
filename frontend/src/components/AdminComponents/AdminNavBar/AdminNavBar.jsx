import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import Logo from "../../../assets/logo.png";
import styles from "./AdminNavBar.module.css";

export default function AdminNavBar() {
  const CustomListItemButton = styled(ListItemButton)(() => ({
    "&:hover": {
      backgroundColor: "rgba(123,123,123,0.46)",
    },
  }));

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEle, setAnchorEle] = useState(null);
  const open = Boolean(anchorEl);
  const openE = Boolean(anchorEle);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickE = (event) => {
    setAnchorEle(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseEl = () => {
    setAnchorEle(null);
  };
  const handleLogout = () => {
    navigate("/");
    setAnchorEl(null);
  };
  const handleHome = () => {
    navigate("/admin/");
    setAnchorEle(null);
  };
  const handleSmartphone = () => {
    navigate("telephone-list");
    setAnchorEle(null);
  };
  const handleFaq = () => {
    navigate("create-user");
    setAnchorEle(null);
  };
  return (
    <div className={styles.admin_navbar_container}>
      <div className={styles.menu_burger_box}>
        <img className={styles.img_logo} src={Logo} alt="" />
      </div>
      <div className={styles.menu_big}>
        <NavLink className={styles.menu_link_style} to="/admin/">
          <CustomListItemButton sx={{ borderRadius: 3, mx: 1 }}>
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ color: "white", mx: 2 }} />
            </ListItemIcon>
            <h5 className={styles.nav_title}>Accueil</h5>
          </CustomListItemButton>
        </NavLink>
        <Divider orientation="vertical" sx={{ backgroundColor: "white" }} />
        <NavLink className={styles.menu_link_style} to="telephone-list">
          <CustomListItemButton
            sx={{
              borderRadius: 3,
              mx: 2,
            }}
          >
            <ListItemIcon>
              <SmartphoneOutlinedIcon sx={{ color: "white", mx: 2 }} />
            </ListItemIcon>
            <h5 className={styles.nav_title}>Stock</h5>
          </CustomListItemButton>
        </NavLink>
        <Divider orientation="vertical" sx={{ backgroundColor: "white" }} />
        <NavLink className={styles.menu_link_style} to="create-user">
          <CustomListItemButton sx={{ borderRadius: 3, mx: 1 }}>
            <ListItemIcon>
              <AddOutlinedIcon sx={{ color: "white", mx: 2 }} />
            </ListItemIcon>
            <h5 className={styles.nav_title}>Ajouter</h5>
          </CustomListItemButton>
        </NavLink>
      </div>
      <div className={styles.burger_menu_div}>
        <Button
          id="basic-button"
          aria-controls={openE ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openE ? "true" : undefined}
          onClick={handleClickE}
        >
          <MenuOutlinedIcon sx={{ color: "white", width: 40, height: 40 }} />
        </Button>
        <Menu
          id="basict-menu"
          anchorEl={anchorEle}
          open={openE}
          onClose={handleCloseEl}
          MenuListProps={{
            "aria-labelledby": "fsef",
          }}
        >
          <MenuItem onClick={handleHome}>Accueil</MenuItem>
          <MenuItem onClick={handleSmartphone}>Stock</MenuItem>
          <MenuItem onClick={handleFaq}>Ajouter</MenuItem>
        </Menu>
      </div>
      <div className={styles.user_logo}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleOutlinedIcon
            sx={{ color: "white", width: 40, height: 40 }}
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
