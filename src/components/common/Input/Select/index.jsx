import React from 'react'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function InputSelect({ label, value, onChange, opcoes, textoDeAjuda, erro }) {

    const classeComErro = "demo-simple-select-error-label"

    const classeSemErro = "demo-simple-select-label"

    return <>
        <InputLabel id={erro ? classeComErro : classeSemErro}>{label}</InputLabel>
        <Select
            labelId="demo-simple-select-error-label"
            id="demo-simple-select-error"
            value={value}
            onChange={onChange}
            renderValue={(value) => value}
        >
            {
                opcoes.map(opcao => {
                    <MenuItem key={opcao.value} value={opcao.value}>{opcao.nome}</MenuItem>
                })
            }
        </Select>
        <FormHelperText>{textoDeAjuda}</FormHelperText>
    </>
}