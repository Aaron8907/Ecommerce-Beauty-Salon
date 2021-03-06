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

    import { useQuery } from "@apollo/client";
    import { QUERY_USER } from "../../utils/queries";
    
    function Nav() {
        // Enter the store provider to obtain the firstName
        const [state, dispatch] = useStoreContext();
        // console.log(state);


         const { data } =  useQuery(QUERY_USER);
        let user;

        if (data) {
            user = data.user;
            //console.log(user);
        }


        
        function showNavigation(user,name2) {
            console.log(user);
            
            
    
            // Get back the argument/prop
            if (Auth.loggedIn()) {
                

                
                return (
                    <ul className="flex-row">
                        <li className="mx-1">
                            <Link to="/orderHistory">
                                Order History
                                <img src={historyBtn} alt="Order History"/>
                            </Link>
                        </li>
                        <li className="mx-1">
                            Hello <span>{user ? (user.firstName) : name2}</span>!
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
        const cart = document.querySelector('.cart-closed');
        window.onscroll = () => {
            if (window.scrollY > 10) {
                navbar.classList.add('nav-active');
                cart.classList.add('cart-closed-active');
            } else {
                navbar.classList.remove('nav-active');
                cart.classList.remove('cart-closed-active');
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
                        <Link className="logo" to="/">Logo</Link>
                    </h1>
                    <nav>
                        {showNavigation(user,state.firstName)}
                    </nav>
                </section>
            </header>

        );
    }

    export default Nav;