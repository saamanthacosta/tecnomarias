import React from 'react'
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

export default function InputMascara({ mascara, erro, exibirSempre, value, readOnly, onChange, disabled, type, label, textoDeAjuda, required, grande }) {
    return <>
        <InputMask mask={mascara} alwaysShowMask={exibirSempre} value={value}
            readOnly={readOnly}
            onChange={onChange}
            disabled={disabled}
        >
            {(inputProps) =>
                <TextField
                
            margin="normal"
                    type={type}
                    label={label}
                    textoDeAjuda={textoDeAjuda}
                    error={erro}
                    required={required}
                    fullWidth={grande} {...inputProps} />}

        </InputMask>
    </>
}

InputMascara.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    textoDeAjuda: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    exibirSempre: PropTypes.bool,
    readOnly: PropTypes.bool,
    grande: PropTypes.bool,
    erro: PropTypes.bool
}

InputMascara.defaultProps = {
    required: false,
    disabled: false,
    readOnly: false,
    exibirSempre: false,
    grande: true,
    erro: false,
    textoDeAjuda: null
}