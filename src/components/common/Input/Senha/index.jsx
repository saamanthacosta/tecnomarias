import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControl, FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function InputSenha({ id, value, onChange, grande, textoDeAjuda, erro }) {
    const [showPassword, setShowPassword] = React.useState(false);

    return <>
        <FormControl required={true} fullWidth={grande} error={erro} >
            <InputLabel htmlFor={id}>Senha</InputLabel>
            <Input
                id={id}
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={(e) => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText>{textoDeAjuda}</FormHelperText>
        </FormControl>
    </>
}


InputSenha.propTypes = {
    id: PropTypes.string.isRequired,
    textoDeAjuda: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    grande: PropTypes.bool,
    erro: PropTypes.bool
}

InputSenha.defaultProps = {
    erro: false,
    grande: false,
    textoDeAjuda: null
}