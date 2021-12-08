    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { useMutation } from '@apollo/client';
    import Auth from '../utils/auth';
    import { ADD_USER } from '../utils/mutations';
    import avatar from "../images/image-05.jpg";
    import Footer from "../components/Footer";

    function Signup(props) {
        const [formState, setFormState] = useState({ email: '', password: '' });
        const [addUser] = useMutation(ADD_USER);

        const handleFormSubmit = async (event) => {
            event.preventDefault();
            const mutationResponse = await addUser({
                variables: {
                    email: formState.email,
                    password: formState.password,
                    firstName: formState.firstName,
                    lastName: formState.lastName,
                },
            });
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
        };

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value,
            });
        };

        return (
            <section>
                <section className="container my-1 login">
                    <div className="l-data">
                        <h1>No te pierdas nuestras promociones</h1>
                        <p>Al ser estar registrad@ en nuestra tienda tendrás acceso a nuestros descuentos en productos inspirados para tu salud y belleza.</p>
                    </div>
                    <div className="l-wrapper">
                        <div className="left">
                            <img src={avatar} alt="Avatar"/>
                        </div>
                        <div className="right">
                            <h2>Signup</h2>
                            <form onSubmit={handleFormSubmit}>
                                <div className="flex-row space-between my-2">
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                        placeholder="First"
                                        name="firstName"
                                        type="firstName"
                                        id="firstName"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex-row space-between my-2">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                        placeholder="Last"
                                        name="lastName"
                                        type="lastName"
                                        id="lastName"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex-row space-between my-2">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        placeholder="youremail@test.com"
                                        name="email"
                                        type="email"
                                        id="email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex-row space-between my-2">
                                    <label htmlFor="pwd">Password:</label>
                                    <input
                                        placeholder="******"
                                        name="password"
                                        type="password"
                                        id="pwd"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex-row flex-end">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                            <Link className="btn-signup" to="/login">← Go to Login</Link>
                        </div>
                    </div>
                </section>
                <Footer/>
            </section>
        );
    }

    export default Signup;
