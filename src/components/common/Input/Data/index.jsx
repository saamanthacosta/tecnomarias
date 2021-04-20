import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function InputData({ nome, label, defaultValue, value, onChange }) {
    return <>
        <TextField
            id="date"
            nome={nome}
            label={label}
            type="date"
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </>
}