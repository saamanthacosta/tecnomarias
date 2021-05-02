import React from 'react'
import '../../../assets/css/pagina.css'

export default function Page({ children }) {

    return (
        <div className="pagina" id="pagina" style={{minHeight: window.innerHeight - 320}}>
            {children}
        </div>
    )

}