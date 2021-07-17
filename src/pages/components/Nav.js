import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Typography } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import Link from '@material-ui/core/Link'


const useStyles = makeStyles((theme)=>({
        root: {
            display: 'flex',
            justifyContent: 'center',
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        menuButton: {
            background: "white",
            color: "rgba(62, 89, 130, 1)"
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        }
    })
);

export function Nav() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => {
        const link = (param) => {
            switch (param) {
              case 0:
                return "/account";
              case 1:
                return "/trip";
              case 2:
                return "/trips";
              case 3:
                return "/reservations";
              case 4:
                return "/findTrip";
              case 5:
                return "/observeTrip";
              case 6:
                return "/map";
              case 7:
                return "/dialog";
              default:
                return "/map";
            }
          }
        return (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            {/* TODO: как появятся иконки для навигации - подкючить их тут*/}
            <List>
                <div className={classes.root}>
                <Avatar alt="Avatar Image" src="../../images/avatar.png" className={classes.large} />
                </div>
                <Typography align="center" variant="h5">Elon Mask</Typography>
                <Typography align="center">Timba20@yandex.ru</Typography>
                <Typography align="center">+79320964396</Typography>
                {/* {['Код', 'подарок и бонусы', 'История', 'Помощь', 'Настройки'].map((text, index) => (*/}
                {/*    <ListItem button key={'Код'}>*/}
                {/*         это типо для иконок навигации*/}
                        {/*<ListItemIcon></ListItemIcon>*/}
                        {/*<ListItemText primary={'Код'} />*/}
                    {/*</ListItem>*/}
                {/*))} */}
            </List>
            <Divider />
            <List>
                {/* <ListItem>
                    <ListItemIcon> <FlagIcon /> </ListItemIcon>
                    <ListItemText primary="Код"></ListItemText>
                </ListItem> */}
                {['Профиль', 'Поездка', 'Все поездки', 'Бронирование', 'Найти поездку', 'Выбрать поездку', 'Карта', 'Чат'].map((text, index) => (
                    <ListItem button  component={Link} href={link(index)}>
                        {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                        <ListItemText primary={text} />
                    </ListItem>))}


                {/* todo: внизу нормальная менбшка + иконки к этому добру, раскомментить
                        к релизу */}

                {/*<ListItem button key={'present and bonuses'}>*/}
                {/*    /!*<ListItemIcon></ListItemIcon>*!/*/}
                {/*    <ListItemText primary={'подарок и бонусы'}/>*/}
                {/*</ListItem>*/}

                {/*<ListItem button key={'история'}>*/}
                {/*    /!*<ListItemIcon></ListItemIcon>*!/*/}
                {/*    <ListItemText primary={'история'}/>*/}
                {/*</ListItem>*/}

                {/*<ListItem button key={'помощь'}>*/}
                {/*    /!*<ListItemIcon></ListItemIcon>*!/*/}
                {/*    <ListItemText primary={'подарок и бонусы'}/>*/}
                {/*</ListItem>*/}

                {/*<ListItem button key={'настройки'}>*/}
                {/*    /!*<ListItemIcon></ListItemIcon>*!/*/}
                {/*    <ListItemText primary={'настройки'}/>*/}
                {/*</ListItem>*/}

            </List>

            {/*<Divider />*/}
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem button key={text}>*/}
            {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
            {/*            <ListItemText primary={text} />*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </div>
        );
    }

    return (
        <React.Fragment key={"left"}>
            <IconButton edge="start"
                        className={classes.menuButton}
                        color="rgba(62, 89, 130, 1)"
                        aria-label="menu"
                        onClick={toggleDrawer("left", true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                {list("left")}
            </Drawer>
        </React.Fragment>
    );
}