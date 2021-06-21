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

export function RegistrationPage (props) {
    let classes = useStyles();

    return (
        <Container maxWidth={"sm"}>
            <Typography variant={"h6"} style={{marginTop: 30}}>
                Регистрация
            </Typography>

            <input className={classes.input}
                   placeholder={"E-mail или номер телефона"}
                   style={{
                       marginBottom: 10,
                       marginTop: 40
                   }}/>

            <input className={classes.input}
                   placeholder={"Имя"}
                   style={{
                       marginBottom: 10,
                   }}/>

            <input className={classes.input}
                   placeholder={"Фамилия"}
                   style={{
                       marginBottom: 10,
                   }}/>

            <input className={classes.input}
                   placeholder={"пароль"}
                   type={"password"}
                   style={{
                       marginBottom: 10,
                   }}/>


            <input className={classes.input}
                   placeholder={"повторите пароль"}
                   type={"password"}
                   style={{
                        marginBottom: 40,
                    }}/>


            <Grid container justify={"center"} direction={"column"}>
                <Button variant={"contained"} color={"primary"} style={{marginBottom: 10}}>
                    регистрация
                </Button>
            </Grid>

        </Container>
    );
}