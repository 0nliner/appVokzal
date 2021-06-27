import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Nav} from "./Nav";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: "none",
        background: "transparent"
    },
    menuButton: {
        color: "rgba(62, 89, 130, 1)",
    },
    title: {
        flexGrow: 1,
        color: "rgba(62, 89, 130, 1)",
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: "18px",
        letterSpacing: "0.500em",
        textTransform: "uppercase",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
}));

export function Header() {
    const classes = useStyles();
    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //
    return (
        <div >
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Nav color="rgba(62, 89, 130, 1)" className={classes.menuButton}/>
                    <Typography variant="h5" className={classes.title}>
                        AppVokzal
                    </Typography>

                        
                </Toolbar>
            </AppBar>
        </div>
    );
}