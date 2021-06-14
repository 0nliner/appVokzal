import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Card, Container, FormControl, FormControlLabel, FormLabel, Grid,
    makeStyles, Radio,
    RadioGroup, TextField,
    Typography
} from "@material-ui/core";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {Header} from "../components/Header";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


let useTripPageStyles = makeStyles(theme => ({

}));




function CarSelection (props) {

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Accordion style={{marginTop: 30}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>Выбор автомобиля</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/*выбор автомобиля*/}
                <FormControl component="fieldset">
                    {/*<FormLabel component="legend">Gender</FormLabel>*/}
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="машина 1" control={<Radio />} label="машина 1" />
                        <FormControlLabel value="машина 2" control={<Radio />} label="машина 2" />
                        <FormControlLabel value="машина 3" control={<Radio />} label="машина 3" />
                        {/*<FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />*/}
                    </RadioGroup>
                </FormControl>

            </AccordionDetails>
        </Accordion>
    );
}


function BreakPoint ({item, index}) {

    return (
        <Draggable draggableId={item.id} index={index}>
            {provided => (
                <div ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     style={{marginBottom: 20, paddingTop: 10}}>

                    <Grid item>
                        <Card>
                            <Container>
                                <Grid container>
                                    <Typography align={"left"} variant={"h6"}>
                                        {item.name}
                                    </Typography>

                                    <Grid item xs={6}>
                                    <TextField type="integer" label={"цена за место"}/>
                                </Grid>

                                    <Typography align={"left"} style={{marginTop: 12, marginBottom: 12}}>
                                    Сообщение пассажирам
                                </Typography>

                                    <Grid item xs={6}>

                                    </Grid>
                                </Grid>
                            </Container>
                        </Card>
                    </Grid>
                </div>
                )}
        </Draggable>
    );
}

const BreakPointItem = (props) => {
    return (
        <Grid item style={{marginBottom: 20, paddingTop: 10}}>
            <Card>
                <Container>
                    <Grid container>
                        <Typography align={"left"} variant={"h6"}>
                            {props.name}
                        </Typography>

                        <Grid item xs={6}>
                            <TextField type="integer" label={"цена за место"}/>
                        </Grid>

                        <Typography align={"left"} style={{marginTop: 12, marginBottom: 12}}>
                            Сообщение пассажирам
                        </Typography>

                        <Grid item xs={6}>

                        </Grid>
                    </Grid>
                </Container>
            </Card>
        </Grid>
    );
}

const DraggableBreakpoints = ({list}) => {
    return list.map((item, index) => <BreakPoint item={item} index={index} key={item.id}/>);
}



function BreakPoints (props) {
    let [initialData, setInitialData] = React.useState([
            {id: "id-0", name: "тагил"},
            {id: "id-1", name: "москва"},
            {id: "id-2", name: "сочи"},
    ]);

    // function onDragEnd(result) {
    //     if (!result.destination) {
    //         return;
    //     }
    //
    //     if (result.destination.index === result.source.index) {
    //         return;
    //     }
    //
    //     setInitialData({});
    // }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}>
                <Typography>Остановки в пути</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container direction={"column"}>
                        <Droppable droppableId={"list"}>
                            {
                                provided => (
                                    <div ref={provided.innerRef}
                                         {...provided.droppableProps}>

                                        {
                                            <DraggableBreakpoints list={initialData}/>
                                        }
                                        {provided.placeholder}

                                    </div>
                                )
                            }
                        </Droppable>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
}


export function TripPage (props) {
    let classes = useTripPageStyles();

    return (
        <DragDropContext onDropEnd={result => console.log(result)}>
            <Box className={""}>
                <Header/>

                <Container xs={"lg"}>
                    <CarSelection/>
                    <BreakPoints/>
                </Container>

            </Box>
        </DragDropContext>
    );
}