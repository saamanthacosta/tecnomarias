import React from 'react'
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

export default function InputSelect({ label, value, onChange, opcoes, textoDeAjuda, required, disabled, grande }) {
    return <>
        <FormControl required={required} fullWidth={grande} disabled={disabled}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => onChange(event, newValue)}
                options={opcoes}
getOptionLabel={(option) => option.nome}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
            <FormHelperText>{textoDeAjuda}</FormHelperText>
        </FormControl>

    </>
}


InputSelect.propTypes = {
    label: PropTypes.string.isRequired,
    textoDeAjuda: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    opcoes: PropTypes.array.isRequired,
    required: PropTypes.bool,
    grande: PropTypes.bool
}

InputSelect.defaultProps = {
    required: false,
    grande: true,
    textoDeAjuda: null
}