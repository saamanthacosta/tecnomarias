import React from 'react'
import IconButton from '@material-ui/core/IconButton';

export default function BotaoIcone({botao}) {
    return <>
        <IconButton aria-label={botao.ariaLabel} size={botao.tamanho}>
          {botao.icone}
        </IconButton>
    </>;
}