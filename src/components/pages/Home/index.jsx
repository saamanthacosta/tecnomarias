import React from 'react';
import css from "../../../assets/css/home.css";
import home_img from "../../../assets/imagens/home-img.png";
import background_img from "../../../assets/imagens/background-img.PNG";

export default function Home() {
    return(
        <body>
            <div class="home-img">
                <img class="img-cover"
                            alt="home-img"
                            src={home_img}
                            width="100%"
                            height="560px"
                            className="d-inline-block align-top"
                />
                <div class="centered">"Nascemos com o objetivo de ajudar mulheres a ampliar seu networking com outras mulheres."<br/><br/>
                "Oferecemos um ambiente no qual possam buscar empresas que dêem espaço e voz para elas crescerem."</div>
            </div>
            <div class="img-cover">
                <img
                            alt="background"
                            src={background_img}
                            width="100%"
                            height="100%"
                            className="d-inline-block align-top"
                />
            </div>
        </body>
    )
}