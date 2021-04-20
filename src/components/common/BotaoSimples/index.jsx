import React from 'react'
import { Button } from '@material-ui/core';

import PropTypes from 'prop-types';

export default function BotaoSimples({ focus, onClick, cor, disabled, variant, nome }) {
  return <>
    <Button
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
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string

}

BotaoSimples.defaultProps = {
  autoFocus: true,
  variant: "",
  disabled: false
}

