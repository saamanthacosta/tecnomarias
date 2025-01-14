import React from 'react'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default function InputTexto({ type, name, onChange, onBlur, label, required, disabled, readOnly, textoDeAjuda, erro, value, grande }) {
    return <>
        <TextField
            onBlur={onBlur}
            margin="normal"
            name={name}
            type={type}
            label={label}
            required={required}
            disabled={disabled}
            InputProps={{
                readOnly: readOnly,
            }}
            helperText={textoDeAjuda}
            error={erro}
            value={value}
            fullWidth={grande}
            onChange={onChange}
        />
    </>
}

InputTexto.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    textoDeAjuda: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    grande: PropTypes.bool,
    erro: PropTypes.bool
}

InputTexto.defaultProps = {
    required: false,
    disabled: false,
    readOnly: false,
    grande: true,
    erro: false,
    textoDeAjuda: null,
    onChange: () => {}
}