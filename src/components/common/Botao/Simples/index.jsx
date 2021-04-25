import React from 'react'
import { Button, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  espacamento: {
    margin: '20px 10px'
  }
}));

export default function BotaoSimples({ focus, onClick, cor, disabled, variant, nome, type, customizado }) {

  const classes = useStyles();

  return <>
    <Button
      className={classes.espacamento}
      type={type}
      autoFocus={focus}
      onClick={onClick}
      color={cor}
      disabled={disabled}
      variant={variant}
    >
      {nome}
    </Button>
  </>;
};

BotaoSimples.propTypes = {
  onClick: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
  cor: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  type: PropTypes.string

}

BotaoSimples.defaultProps = {
  autoFocus: true,
  variant: null,
  cor: "default",
  disabled: false,
  type: "button"
}

