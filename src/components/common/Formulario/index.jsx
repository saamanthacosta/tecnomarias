import React from 'react'
import PropTypes from 'prop-types';

export default function Formulario({ children, autoComplete, noValidate, onSubmit }) {


    return <>
        <form autoComplete={autoComplete} noValidate={noValidate} onSubmit={onSubmit} >
            {children}
        </form>
    </>
}

Formulario.propTypes = {
    children: PropTypes.element.isRequired,
    onSubmit: PropTypes.func.isRequired,
    autoComplete: PropTypes.string,
    noValidate: PropTypes.bool,
}

Formulario.defaultProps = {
    autoComplete: "off",
    noValidate: false
}