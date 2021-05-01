import React from 'react'
import { Paper } from '@material-ui/core'

export default function Papel({children}) {
    return (
        <Paper elevation={5} style={{padding: '10px'}}>
            {children}
        </Paper>
    )
}