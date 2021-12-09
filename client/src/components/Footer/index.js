    import React from "react";
    //import {link} from "react-router-dom";
    import "../../styles/styles.min.css";
    import twitter from "../../images/twitter_b.png";
    import facebook from "../../images/facebook_b.png";
    import instagram from "../../images/instagram_b.png";
    import github from "../../images/github_b.png";

    export default function Footer() {
        return(
            <footer className="footer">
                <section>
                    <h2>Recuerda siempre asesorarte <br/> <span>por nuestros profesionales.</span></h2>
                    <p>Nuestro salón está diseñado para hacerte sentir en casa, en un ambiente limpio, tranquilo y con gran comodidad.</p>
                    <div className="above">
                        <ul className="left">
                            <li><button onClick="location.href='mailto:name@email.com''">Agenda tu cita</button></li>
                            <li>
                                <a href="#" target="_blank">
                                    <img src={facebook} alt="Facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <img src={instagram} alt="Instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <img src={twitter} alt="Twitter"/>
                                </a>
                            </li>
                        </ul>
                        <ul className="right">
                            <li>
                                <a href="https://github.com/Aaron8907/Ecommerce-Beauty-Salon" target="_blank">
                                    <img src={github} alt="GitHub"/>
                                    Developed by LACI
                                </a>
                            </li>
                        </ul>
                    </div>
                    <section className="below">
                        <ul>
                            <li><a href="http://localhost:3000/#About">#About</a></li>
                            <li><a href="http://localhost:3000/#Store">#Store</a></li>
                            <li><a href="http://localhost:3000/#Contact">#Contact</a></li>
                        </ul>
                        <ul className="right">
                            <li>Copyright © 2021 LACI LLC. All rights reserved.</li>
                        </ul>
                    </section>
                </section>
            </footer>
        );
    }