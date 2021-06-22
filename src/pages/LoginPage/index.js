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
            <Typography variant={"h6"} style={{marginTop: 30}}>
                Авторизируйтесь
            </Typography>

            <input className={classes.input}
                   placeholder={"E-mail или номер телефона"}
                   style={{
                       marginBottom: 10,
                       marginTop: 40
                   }}/>

            <input className={classes.input}
                   placeholder={"пароль"}
                   type={"password"}
                   style={{
                        marginBottom: 40,
                    }}/>


            <Grid container justify={"center"} direction={"column"}>
                <Button onClick={auth} variant={"contained"} color={"primary"} style={{marginBottom: 10}}>
                    Войти
                </Button>

                <Button onClick={link}  variant={"contained"} color={"primary"}>
                    Создать аккаунт
                </Button>

                <Typography variant={"caption"} style={{marginTop: 20, color: "#91B3FA"}}>
                    восстановить пароль
                </Typography>

            </Grid>

        </Container>
    );
}