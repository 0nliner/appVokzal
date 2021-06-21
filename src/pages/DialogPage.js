import {Box, Button, Container, Fab, Grid, makeStyles, TextareaAutosize, Typography} from "@material-ui/core";
import {Header} from "./components/Header";
import SendIcon from '@material-ui/icons/Send';

let useDialogStyles = makeStyles(theme => ({
    msg: {
        backgroundColor: "#1976d2",
        color: "white",
        minHeight: 30,
        maxWidth: 280,
        borderRadius: 5,
        margin: 10,
        padding: 10
    }
}));


function MyMsg (props) {
    let classes = useDialogStyles();

    return (
        <Grid container justify={"flex-end"} style={{position: "relative", width: "100%", right: -15}}>
            <Box className={classes.msg} style={{right: 10}}>
                <Typography align="left">
                    привет, дружочек пирожочек. Мамколюбы на связи
                </Typography>

                <Typography style={{fontSize: "0.7em", marginTop: 15}} align="left">
                    12:34
                </Typography>
            </Box>
        </Grid>
    );
}

function OtherMsg (props) {
    let classes = useDialogStyles();

    return (
        <Grid container
              justify={"flex-start"}
              style={{
                  position: "relative",
                  width: "100%",
                  left: -15,
              }}>

            <Box className={classes.msg} style={{left: 10, backgroundColor: "#16283a"}}>
                <Typography align="left">
                    привет, дружочек пирожочек. Мамколюбы на связи
                </Typography>

                <Typography style={{fontSize: "0.7em", marginTop: 15}} align="right">
                    12:34
                </Typography>
            </Box>
        </Grid>
    );
}

function Messages (props) {
    return (
        <Grid container
              direction={"column"}>

            <MyMsg/>
            <MyMsg/>
            <OtherMsg/>
            <OtherMsg/>
            <MyMsg/>
            <MyMsg/>
            <OtherMsg/>

        </Grid>
    );
}

function SendMessage (props) {
    return (
        <Grid container style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            minHeight: 40,
            // backgroundColor: "#dadada"
            backgroundColor: "white",
            boxShadow: "3px 0 7px 7px rgba(0, 0, 0, 0.2)"

        }}>

            <TextareaAutosize
                rowsMin={1}
                rowsMax={4}
                style={{
                    border: "none",
                    // borderRadius: 30,
                    color: "#868686",
                    padding: 5,
                    width: "calc(100% - 50px)",
                    // margin: "auto"
                    position: "absolute",
                    left: 0
                }}/>

            <Fab size="small" style={{position: "absolute", right: 5, bottom: 0, backgroundColor: "white", boxShadow: "none"}}>
                <SendIcon/>
            </Fab>

            {/*<Grid item>*/}
            {/*    <Grid container justify={"center"} align={"center"}>*/}
            {/*        <Button variant={"contained"} color={"primary"} xs={"sm"}>*/}
            {/*            Отправить*/}
            {/*        </Button>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </Grid>
    );
}


export function DialogPage (props) {
    let classes = useDialogStyles();

    return (
        <Box>
            <Header/>
            <Container>
                <Messages/>
            </Container>
            <SendMessage/>
        </Box>
    );
}