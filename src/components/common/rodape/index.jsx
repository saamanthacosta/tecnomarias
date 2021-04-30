import React from 'react';
import css from "../../../assets/css/rodape.css";
import logo from "../../../assets/imagens/logo-header2.PNG";

export default function Rodape() {
    return (
        <footer class="footer-distributed">
            <div class="footer-left">
                <p class="footer-company-about">
                    <span>Sobre a empresa</span>
                    Somos uma empresa que busca reduzir a desigualdade que existe na área de STEM. 
                    Temos como objetivo auxiliar a promover o networking entre mulheres auxiliando-as em seu desenvolvimento profissional.
                </p>

            </div>

            <div class="footer-center">

                <img
                    alt="logo-header"
                    src={logo}
                    width="250"
                    height="75"
                    className="d-inline-block align-top"
                />

                <p class="footer-links">
                    <a href="#" class="link-1">Home</a>
                    <a href="#">Vagas</a>
                    <a href="#">Cadastros</a>
                    <a href="#">Conecte-se</a>
                    <a href="#">Sobre</a>
                </p>

                <p class="footer-company-name">Universidade Federal Fluminense - TecnoMarias © 2021</p>



            </div>

            <div class="footer-right">

                <div class="footer-icons">

                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>

                </div>

            </div>
        </footer>
    )
}