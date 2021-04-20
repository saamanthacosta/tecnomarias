import { Checkbox, FormControlLabel, FormHelperText } from '@material-ui/core'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React from 'react'
import PropTypes from 'prop-types';

export default function InputCheckbox({ label, checked, onChange, icon, cor, textoDeAjuda, checkedIcon }) {

    return <>
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    icon={icon}
                    checkedIcon={checkedIcon}
                    color={cor}
                />
            }
            label={label}
        />
        { textoDeAjuda && <FormHelperText>{textoDeAjuda}</FormHelperText>}
    </>
}


InputCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    textoDeAjuda: PropTypes.string,
    icon: PropTypes.element,
    checkedIcon: PropTypes.element,
    cor: PropTypes.string
}

InputCheckbox.defaultProps = {
    icon: <CheckBoxOutlineBlankIcon />,
    checkedIcon: <CheckBoxIcon />,
    textoDeAjuda: null,
    cor: "primary"
}