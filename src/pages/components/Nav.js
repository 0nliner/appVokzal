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

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import avatarPhoto from '../../images/avatar.png'
import { ReactComponent as CodeIcon } from '../../icons/code.svg';
import { ReactComponent as GiftIcon} from '../../icons/gift.svg';
import { ReactComponent as HistoryIcon} from '../../icons/history.svg';
import { ReactComponent as HelpIcon} from '../../icons/help.svg';
import { ReactComponent as CardIcon} from '../../icons/card2.svg';
import { ReactComponent as SettingIcon} from '../../icons/setting.svg';



const useStyles = makeStyles((theme)=>({
        root: {
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: 10
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
            width: theme.spacing(14),
            height: theme.spacing(14),
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
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


    const [stateS, setStateSwitch] = React.useState({
        checked: false,
      });
    
      const handleChangeSwitch = (event) => {
        setStateSwitch({ ...stateS, [event.target.name]: event.target.checked });
      };
      const data = [
        {
            index: 0,
            name: "Код",
            icon: <CodeIcon style={{fontSize:"40px", paddingLeft: 5}} />
        },
        {
            index: 1,
            name: "Подарок бонусы",
            icon: <GiftIcon style={{fontSize:"40px", paddingLeft: 5}} />
        },
        {
            index: 2,
            name: "История",
            icon: <HistoryIcon style={{fontSize:"40px"}} />
        },
        {
            index: 3,
            name: "Помощь",
            icon: <HelpIcon style={{fontSize:"40px", paddingLeft:10}} />
        },
        {
            index: 4,
            name: "Оплата",
            icon: <CardIcon style={{fontSize:"40px", paddingLeft: 5}} />
        },
        {
            index: 5,
            name: "Настройки",
            icon: <SettingIcon style={{fontSize:"40px", paddingLeft:5}} />
        },
    ]

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
            
            onKeyDown={toggleDrawer(anchor, false)}
        >

            {/* TODO: как появятся иконки для навигации - подкючить их тут*/}
            <List>
                <div className={classes.root}>
                <Avatar alt="Avatar Image" src={avatarPhoto} className={classes.large} />
                </div>
                <Typography style={{color: "#757575", fontWeight: 600}}  align="center" variant="h6">Дмитрий Дмитриевич</Typography>
                <Typography style={{color: "#757575"}} align="center">test@gmail.com</Typography>
                <Typography style={{color: "#757575"}} align="center">+7 (987) 226 98 56</Typography>
                {/* {['Код', 'подарок и бонусы', 'История', 'Помощь', 'Настройки'].map((text, index) => (*/}
                {/*    <ListItem button key={'Код'}>*/}
                {/*         это типо для иконок навигации*/}
                        {/*<ListItemIcon></ListItemIcon>*/}
                        {/*<ListItemText primary={'Код'} />*/}
                    {/*</ListItem>*/}
                {/*))} */}
            </List>
            <List style={{marginTop: 20}}>
                {/* <ListItem>
                    <ListItemIcon> <FlagIcon /> </ListItemIcon>
                    <ListItemText primary="Код"></ListItemText>
                </ListItem> */}
                {data.map(item => (
                    <ListItem button component={Link} href={link(item.index)}>
                        <ListItemIcon style={{color: "black"}}>{item.icon}</ListItemIcon>
                        <ListItemText style={{color: "#757575"}} primary={item.name} />
                    </ListItem>))}
                    
                    <ListItem>
                        <ListItemIcon style={{width: 56}}>
                        <FormControlLabel control={ <Switch checked={stateS.checked} onChange={handleChangeSwitch} name="checked" color="primary"/>} />
                        </ListItemIcon>
                        <ListItemText style={{color: "#757575"}} primary="Водитель" />
                    </ListItem>


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