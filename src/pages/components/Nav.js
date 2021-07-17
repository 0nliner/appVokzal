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
import {Link} from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
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

    const list = (anchor) => (
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
                {/*{['Код', 'подарок и бонусы', 'История', 'Помощь', 'Настройки'].map((text, index) => (*/}
                {/*    <ListItem button key={'Код'}>*/}
                {/*         это типо для иконок навигации*/}
                        {/*<ListItemIcon></ListItemIcon>*/}
                        {/*<ListItemText primary={'Код'} />*/}
                    {/*</ListItem>*/}
                {/*))}*/}
                <Link to="/map">
                    <ListItem button key={'Код'}>
                        {/*<ListItemIcon></ListItemIcon>*/}
                        <ListItemText primary={'Код'}>
                            код
                        </ListItemText>
                    </ListItem>
                </Link>

                <ListItem button key={'present and bonuses'}>
                    {/*<ListItemIcon></ListItemIcon>*/}
                    <ListItemText primary={'подарок и бонусы'}/>
                </ListItem>

                <ListItem button key={'история'}>
                    {/*<ListItemIcon></ListItemIcon>*/}
                    <ListItemText primary={'история'}/>
                </ListItem>

                <ListItem button key={'помощь'}>
                    {/*<ListItemIcon></ListItemIcon>*/}
                    <ListItemText primary={'подарок и бонусы'}/>
                </ListItem>

                <ListItem button key={'настройки'}>
                    {/*<ListItemIcon></ListItemIcon>*/}
                    <ListItemText primary={'настройки'}/>
                </ListItem>

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

    return (
        <React.Fragment key={"left"}>
            <IconButton edge="start"
                        className={classes.menuButton}
                        color="inherit"
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