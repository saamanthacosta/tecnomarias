import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function InputTexto({ type, onChange, name, label, required=false, disabled=false, readOnly=false, textoDeAjuda, erro, value, grande=false }) {
    return <>
        <TextField
            id="standard-basic"
            type={type}
            label={label}
            name={name}
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