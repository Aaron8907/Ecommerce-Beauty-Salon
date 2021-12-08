    import React from "react";
    import Auth from "../../utils/auth";
    import { Link } from "react-router-dom";
    import { useStoreContext } from "../../utils/GlobalState";
    import "../../styles/styles.min.css";
    import dialog from "../../images/dialog.png";
    import loginBtn from "../../images/login.png";
    import logoutBtn from "../../images/logout.png";
    import signBtn from "../../images/signup.png";
    import historyBtn from "../../images/history.png";

    function Nav() {
        // Enter the store provider to obtain the firstName
        const [state, dispatch] = useStoreContext();
        // console.log(state);
        function showNavigation(name) {
            console.log(name, state);
            // Get back the argument/prop
            if (Auth.loggedIn()) {
                // console.log(Auth)
                return (
                    <ul className="flex-row">
                        <li className="mx-1">
                            <Link to="/orderHistory">
                                Order History
                                <img src={historyBtn} alt="Order History"/>
                            </Link>
                        </li>
                        <li className="mx-1">
                            Hello <span>{name}</span>!
                        </li>
                        <li className="mx-1">
                            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                            <a href="/" onClick={() => Auth.logout()}>
                                Logout
                                <img src={logoutBtn} alt="Logout"/>
                            </a>
                        </li>
                    </ul>
                );
            } else {
                return (
                    <ul className="flex-row">
                        <li className="mx-1">
                            <Link to="/signup">
                                Signup
                                <img src={signBtn} alt="Sign Up"/>
                            </Link>
                        </li>
                        <li className="mx-1">
                            <Link to="/login">
                                Login
                                <img src={loginBtn} alt="Login"/>
                            </Link>
                        </li>
                    </ul>
                );
            }
        }

        const navbar = document.querySelector('.header');
        window.onscroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-active');
            } else {
                navbar.classList.remove('nav-active');
            }
        };

        return (
            <header className="header">
                <section className="h-top">
                    <img src={dialog} alt="Dialog"/>
                    <p>Dercos Energising Shampoo is in stock. Order now!</p>
                </section>
                <section className="h-wrapper">
                    <h1>
                        <Link to="/">Logo</Link>
                    </h1>
                    <nav>
                        {showNavigation(state.firstName)}
                    </nav>
                </section>
            </header>

        );
    }

    export default Nav;