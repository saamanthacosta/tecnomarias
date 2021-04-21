import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Formulario from '../../../common/Formulario'
import DadosLinks from '../common/DadosLinks';
import DadosPessoais from '../common/DadosPessoais';

export default function ExibirPF() {

    const [pf, setPf] = useState(null);

    useEffect(() => {
        if (pf === null) {
        }
    })

    return <>
        <Container maxWidth="sm">
            <Formulario>
                <>
                    <DadosPessoais paginaDeExibir />
                    <DadosLinks paginaDeExibir />
                    {/* <Box component="span" m={20}>
                    <BotaoSimples
                        customizado={true}
                        variant="outlined"
                        onClick={voltar}
                        nome="Voltar"
                        cor="primary"
                    />
                    <BotaoSimples
                        customizado={true}
                        type="submit"
                        variant="contained"
                        onClick={proximo}
                        nome="Próximo"
                        cor="primary"
                    />
                </Box> */}
                </>
            </Formulario>
        </Container>
    </>
}