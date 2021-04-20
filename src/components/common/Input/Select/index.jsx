import React from 'react'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText } from '@material-ui/core';

export default function InputSelect({ label, value, onChange, opcoes, textoDeAjuda, erro, id, required, grande }) {
    return <>

        <FormControl required={required} fullWidth={grande} error={erro}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                value={value}
                onChange={onChange}
                required={true}
                fullWidth={true}
                renderValue={(value) => value}
            >
                {
                    opcoes.map(opcao => {
                        return (
                            <MenuItem key={opcao.value} value={opcao.value}>{opcao.nome}</MenuItem>
                        )
                    })
                }
            </Select>
            <FormHelperText>{textoDeAjuda}</FormHelperText>
        </FormControl>
    </>
}


InputSelect.propTypes = {
    label: PropTypes.string.isRequired,
    textoDeAjuda: PropTypes.string,
    value: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    opcoes: PropTypes.array.isRequired,
    required: PropTypes.bool,
    grande: PropTypes.bool,
    erro: PropTypes.bool
}

InputSelect.defaultProps = {
    required: false,
    grande: true,
    erro: false,
    textoDeAjuda: null
}