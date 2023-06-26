import React from "react";
import { useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SwipeableTemporaryDrawer from "../SideDrawer";
import config from "../../config";
import "./style.css";

const imgSrc = "https://material-kit-pro-react.devias.io/assets/avatars/avatar-anika-visser.png";
const links = [
    {
        title: "Profile",
        href: "",
        icon: AccountCircleIcon
    }
]

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    let { pathname } = useLocation();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if (config.headerNotRequired.includes(pathname)) return null;

    return (
        <header id="header-wrapper">
            <SwipeableTemporaryDrawer />
            <div id="header_right">
                <Avatar aria-describedby={id} onClick={handleClick}>
                    <img src={imgSrc} alt="H" style={{ height: "100%" }} />
                </Avatar>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <div id="popover_userDetails">
                        <p id="popover-userDetails_name">Stephen</p>
                        <p id="popover-userDetails_email">stephen.brooks@bt.com</p>
                    </div>
                    <hr />
                    <div id="popover_links">
                        <List>
                            {links.map((link) => (
                                <ListItem>
                                    <Link to={link.href}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <link.icon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={link.title} />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <hr />
                    <Link id="logout" to="/login">
                        Logout</Link>
                </Popover>
            </div>
        </header>
    )
};

export default Header;