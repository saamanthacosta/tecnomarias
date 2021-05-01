import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 450,
        margin: '20px',
        boxShadow: '1px 1px 12px 2px rgba(128,128,128,0.75)'
    },
    segundaDescricao: {
        fontSize: 14,
    },
    descricao: {
        marginBottom: 12,
    },
});

export default function CardSimples({ titulo, descricao, outrasDescricoes, onClick = null }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {titulo.toUpperCase()}
                </Typography>
                <Typography className={classes.descricao} color="textSecondary">
                    {descricao}
                </Typography>
                {
                    outrasDescricoes !== null ? 
                    outrasDescricoes.map(descricao => {
                        return (
                            <Typography key={descricao} className={classes.segundaDescricao} color="textSecondary" gutterBottom>
                                {descricao}
                            </Typography>
                        )
                    })
                    : null
                }
            </CardContent>
            {
                onClick !== null &&
                <CardActions>
                    <Button size="small" onClick={onClick} variant="contained" color="primary">Saiba Mais</Button>
                </CardActions>
            }
        </Card>
    );
}