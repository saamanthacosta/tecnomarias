import React from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

export default function Alerta({ tipo, mensagem }) {
    return (
        <Alert severity={tipo}>{mensagem}</Alert>
    );
}

Alerta.propTypes = {
    tipo: PropTypes.string.isRequired,
    mensagem: PropTypes.string.isRequired,
}