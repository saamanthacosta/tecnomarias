import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pagina: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#fff',
        minHeight: tamanhoDaPagina
    },
}));

const tamanhoDaPagina = window.innerHeight

export default function Page({ children }) {

    const classes = useStyles();
    return (
        <div className={classes.pagina}>
            {children}
        </div>
    )

}