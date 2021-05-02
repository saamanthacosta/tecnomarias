import React from 'react'

export default function Page({ children }) {
    return (
        <div style={{minHeight: `${(window.innerHeight - 290)}px`, backgroundColor: '#ffffff', padding: '40px 0px'}}>
            {children}
        </div>
    )
}