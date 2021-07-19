import {Box, Container, Typography} from "@material-ui/core";
import StarSVG from "../../icons/star.svg";


export function Review ({raiting, text, author}) {
    return (
        <Container style={{position:"relative",
                           padding: 5,
                           backgroundColor: "#F7F7F9",
                           marginTop: 10
        }}>
            <Typography align={"left"}>
                {author}
            </Typography>

            <Box style={{position: "absolute",
                         right: 10,
                         top: 10}}>

                {raiting}
                <img src={StarSVG}/>
            </Box>

            <Typography align={"left"}>
                {text}
            </Typography>
        </Container>
    );
}