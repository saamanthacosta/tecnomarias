import Alert from '@material-ui/lab/Alert'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    alerta: {
        padding: '50px' 
    },
}));
export default function MensagemErro({ mensagem }) {

    const classes = useStyles();
    return (
        <Alert severity="error" className={classes.alerta}>
            {mensagem}
        </Alert>
    )
}