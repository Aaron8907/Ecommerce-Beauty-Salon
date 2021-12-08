    import React, { useState } from 'react';
    import { useStoreContext } from '../utils/GlobalState'
    import { useMutation } from '@apollo/client';
    import { Link } from 'react-router-dom';
    import { LOGIN } from '../utils/mutations';
    import Auth from '../utils/auth';
    import { SET_FIRSTNAME } from '../utils/actions';
    import { useHistory } from 'react-router-dom';
    import avatar from "../../src/images/image-04.jpg"

    function Login(props) {
        const [formState, setFormState] = useState({ email: '', password: '' });
        const [login, { error }] = useMutation(LOGIN);
        const [state, dispatch] = useStoreContext();
        let history = useHistory();

        const handleFormSubmit = async (event) => {
            event.preventDefault();
            try {
                const mutationResponse = await login({
                    variables: { email: formState.email, password: formState.password },
                });
                const token = mutationResponse.data.login.token;
                const userName = mutationResponse.data.login.user.firstName;
                await dispatch({type:SET_FIRSTNAME, firstName:userName});

                const authSuccess = Auth.login(token);
                console.log(authSuccess);
                if (authSuccess) {
                    history.push('/')
                }
            } catch (e) {
                console.log(e);
            }
        };

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value,
            });
        };

        return (
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
                        <h2>Login</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="flex-row space-between my-2">
                                <label htmlFor="email">Correo electrónico</label>
                                <input
                                    placeholder="youremail@test.com"
                                    name="email"
                                    type="email"
                                    id="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex-row space-between my-2">
                                <label htmlFor="pwd">Contraseña</label>
                                <input
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    id="pwd"
                                    onChange={handleChange}
                                />
                            </div>
                            {error ? (
                                <div>
                                    <p className="error-text">The provided credentials are incorrect</p>
                                </div>
                            ) : null}
                            <div className="flex-row flex-end">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                        <Link className="btn-signup" to="/signup">← Go to Signup</Link>
                    </div>
                </div>
            </section>
        );
    }

    export default Login;

