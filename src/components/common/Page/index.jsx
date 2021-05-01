import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pagina: {
        margin: '40px 0px',
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#fff',
        minHeight: tamanhoDaPagina
    },
}));

const tamanhoDaPagina = window.innerHeight - 300

export default function Page({ children }) {

    const classes = useStyles();
    return (
        <div className={classes.pagina}>
            {children}
        </div>
    )

}