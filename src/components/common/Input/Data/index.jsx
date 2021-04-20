import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    data: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function InputData({ label, value, onChange, grande, readOnly, disabled, required, erro, textoDeAjuda }) {

    const classes = useStyles();

    return <>
        <TextField
            label={label}
            type="date"
            value={value}
            required={required}
            disabled={disabled}
            InputProps={{
                readOnly: readOnly,
            }}
            helperText={textoDeAjuda}
            error={erro}
            onChange={onChange}
            InputLabelProps={{
                shrink: true,
            }}
            fullWidth={grande}
            className={grande ? null : classes.data}
        />
    </>
}

InputData.propTypes = {
    label: PropTypes.string.isRequired,
    textoDeAjuda: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    grande: PropTypes.bool,
    erro: PropTypes.bool
}

InputData.defaultProps = {
    required: false,
    disabled: false,
    readOnly: false,
    grande: false,
    erro: false,
    textoDeAjuda: null
}