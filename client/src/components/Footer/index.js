    import React from "react";
    //import {link} from "react-router-dom";
    import "../../styles/styles.min.css";

    export default function Footer() {
        return(
            <section className="Footer">
                <div className="f-wrapper">
                    <div className="left">
                        <button onClick="location.href='http://localhost:3000/#store'">Store</button>
                    </div>
                    <ul className="right">
                        <li><button onClick="location.href='http://localhost:3000/'">Facebook</button></li>
                        <li><button onClick="location.href='http://localhost:3000/'">Instagram</button></li>
                        <li><button onClick="location.href='http://localhost:3000/'">Twitter</button></li>
                        <li><button onClick="location.href='http://localhost:3000/'">Make your appointment</button></li>
                    </ul>
                </div>
            </section>
        );
    }