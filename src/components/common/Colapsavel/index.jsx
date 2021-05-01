import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Colapsavel({ titulo, corpo }) {
    const classes = useStyles();
    const [aberto, setAberto] = useState(true);

    return (
        <Accordion expanded={aberto} onChange={(e) => setAberto(!aberto)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>{titulo}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {corpo}
            </AccordionDetails>
        </Accordion>
    );
}