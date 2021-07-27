import {
    Box, 
    Container, 
    Typography, 
    makeStyles, 
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    CardContent,
} from "@material-ui/core";

import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const commentsUseStyles = makeStyles(theme => ({
    card: {
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
      boxShadow: "none",
      background: "#F7F7F9"
    },
    cardHeader: {
      width: "100%",
      paddingBottom: 7,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    accardionCards: {
      display: "flex",
      flexDirection: "column",
      boxShadow: "none"
    }
  }));

export function Review ({raiting, text, author}) {
    const classes = commentsUseStyles();
    return (
        
                <Card className={classes.card}>
                  <CardContent>
                    <div className={classes.cardHeader}>
                      <Typography style={{fontSize: "11px"}}>{author}</Typography>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <Typography style={{fontSize: "9px"}}variant="caption">{raiting}</Typography>
                        <StarIcon style={{color: "#FFA011", fontSize: "12px"}} />
                      </div>
                    </div>
                    <Typography align="left" style={{fontSize: "10px"}}>{text}</Typography>
                  </CardContent>
                </Card>
    );
}