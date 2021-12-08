    import React from "react";
    //import {link} from "react-router-dom";
    import "../../styles/styles.min.css";

    export default function Stage() {
        return(
            <section className="stage">
                <div className="s-wrapper">
                    <div className="s-info">
                        <h1>Welcome message</h1>
                        <div className="liner"></div>
                        <p>
                            En Lety Alvarez <em>(Alta peluquería)</em> nos destacamos por nuestros años de experiencia en pasarelas y farandula, ofrecemos un servicio de primera calidad con productos de primera. Nuestros estilistas están certificados en las últimas tendencias internacionales para asegurar estar a la vanguardia y ofrecer a nuestros clientes una experiencia única. Nuestro salón está diseñado para hacerte sentir en casa en un ambiente limpio, tranquilo, con gran comodidad y sobre todo con los protocolos covid para asegurar tu bienestar.
                        </p>
                        <button onClick="location.href='http://localhost:3000/#store'">Visita la tienda</button>
                        <button onClick="location.href='http://localhost:3000/#contact'">Agenda tu cita</button>
                    </div>
                </div>
            </section>
        );
    }