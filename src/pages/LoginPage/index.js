import {Button, Container, Grid, makeStyles, Typography} from "@material-ui/core";


let useStyles = makeStyles(theme => ({
    input: {
        backgroundColor: "#F2F2F2",
        color: "#6C6C6C",
        paddingLeft: 20,
        width: "calc(100% - 20px)",
        height: 35,
        border: "none",
        borderRadius: 10
    },
    logo: {
        color: "rgba(62, 89, 130, 1)",
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: "22px",
        marginTop: 20,
        letterSpacing: "0.500em",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    btn: {
        backgroundColor: "rgba(41, 67, 103, 1)",
        color: "rgba(255, 255, 255, 1)",
        fontSize: "12px",
        textTransform: "none"
    }


}));

export function LoginPage (props) {
    let classes = useStyles();
    const auth = () => {
        window.location.assign('http://localhost:3000/map');
    };
    const link = () => {
        window.location.assign('http://localhost:3000/registration');
    };
    return (
        <Container maxWidth={"sm"}>

            <Typography variant={"h4"} className={classes.logo}>
                APPVOKZAL
            </Typography>

            <Typography variant={"h6"} style={{marginTop: 20, fontSize: "15px", fontWeight: "600"}}>
                Авторизуйтесь
            </Typography>

            <input className={classes.input}
                   placeholder={"E-mail или номер телефона"}
                   style={{
                       marginBottom: 10,
                       marginTop: 40,
                   }}/>

            <input className={classes.input}
                   placeholder={"Пароль"}
                   type={"password"}
                   style={{
                        marginBottom: 40,
                    }}/>


            <Grid container justify={"center"} direction={"column"}>
                <Button className={classes.btn} onClick={auth} variant={"contained"} color={"primary"} style={{marginBottom: 10}}>
                    Войти
                </Button>

                <Button className={classes.btn} onClick={link}  variant={"contained"} color={"primary"}>
                    Зарегистироваться
                </Button>

                <Typography variant={"caption"} style={{marginTop: 20, color: "rgba(128, 160, 206, 1)"}}>
                    Забыли пароль?
                </Typography>

            </Grid>

        </Container>
    );
}