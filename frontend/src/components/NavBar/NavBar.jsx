import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const CustomListItemButton = styled(ListItemButton)(() => ({
    "&:hover": {
      backgroundColor: "rgba(123,123,123,0.46)",
    },
  }));

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    navigate("/");
    setAnchorEl(null);
  };
  return (
    <div className={styles.navbar_container}>
      <NavLink className={styles.menu_link_style} to="/user/">
        <CustomListItemButton sx={{ borderRadius: 3, mx: 1 }}>
          <ListItemIcon>
            <HomeOutlinedIcon sx={{ color: "white", mx: 2 }} />
          </ListItemIcon>
          <h5 className={styles.nav_title}>Accueil</h5>
        </CustomListItemButton>
      </NavLink>
      <Divider orientation="vertical" sx={{ backgroundColor: "white" }} />
      <NavLink className={styles.menu_link_style} to="smartphone">
        <CustomListItemButton
          sx={{
            borderRadius: 3,
            mx: 2,
          }}
        >
          <ListItemIcon>
            <SmartphoneOutlinedIcon sx={{ color: "white", mx: 2 }} />
          </ListItemIcon>

          <h5 className={styles.nav_title}>Évaluer un téléphone</h5>
        </CustomListItemButton>
      </NavLink>
      <Divider orientation="vertical" sx={{ backgroundColor: "white" }} />
      <NavLink className={styles.menu_link_style} to="faq">
        <CustomListItemButton sx={{ borderRadius: 3, mx: 1 }}>
          <ListItemIcon>
            <QuestionMarkOutlinedIcon sx={{ color: "white", mx: 2 }} />
          </ListItemIcon>
          <h5 className={styles.nav_title}>FAQ</h5>
        </CustomListItemButton>
      </NavLink>
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
