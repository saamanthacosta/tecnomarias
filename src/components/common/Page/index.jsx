import React from 'react'

export default function Page({ children }) {
    return (
        <div style={{minHeight: `${(window.innerHeight - 290)}px`, backgroundColor: '#f8f9fa', padding: '40px 0px'}}>
            {children}
        </div>
    )
}