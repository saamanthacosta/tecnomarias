import React from 'react'
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { FormHelperText } from '@material-ui/core';

export default function InputRadio({ grupo, value, onChange, opcoes, textoDeAjuda, required }) {

    return <>
        <FormControl component="fieldset" required={required} >
            <FormLabel component="legend">{grupo}</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={onChange}>
                {
                    opcoes.map(
                        opcao => {
                            return (
                                <FormControlLabel value={opcao.id} control={<Radio />} label={opcao.nome} />
                            )
                        }
                    )
                }
            </RadioGroup>
            <FormHelperText>{textoDeAjuda}</FormHelperText>
        </FormControl>
    </>
}

InputRadio.propTypes = {
    grupo: PropTypes.string,
    textoDeAjuda: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    opcoes: PropTypes.array.isRequired,
    required: PropTypes.bool,
}

InputRadio.defaultProps = {
    grupo: '',
    required: false,
    textoDeAjuda: null
}