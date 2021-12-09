    import React from "react";
    import { Link } from "react-router-dom";
    import { useQuery } from "@apollo/client";
    import { QUERY_USER } from "../utils/queries";
    import Footer from "../components/Footer";
    import Cart from "../images/cart.png";

    function OrderHistory() {
        const { data } = useQuery(QUERY_USER);
        let user;

        if (data) {
            user = data.user;
        }

        return (
            <section>
                <section className="container my-1 ticket">
                    {user ? (
                        <div className="t-wrapper">
                            <h1>Order History for {user.firstName} {user.lastName}</h1>
                            <p className="subtitle">Encuentra tus compras más recientes y haz clic para comprarlos nuevamente.</p>
                            {user.orders.map((order) => (
                                <div key={order._id} className="my-2 t-data">
                                    <h3>
                                        {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                    </h3>
                                    <div className="flex-row t-items">
                                        {order.products.map(({ _id, image, name, price}, index) => (
                                            <div key={index} className="card px-1 py-1">
                                                <Link to={`/products/${_id}`} className="t-content">
                                                    <img alt={name} src={`/images/${image}`} />
                                                    <p className="name">{name}</p>
                                                    <span className="price"><img alt={Cart} src={Cart} /> ${price} MXN</span>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                    <Link className="btn-signup" to="/">← Back to Products</Link>
                </section>
                <Footer/>
            </section>
        );
    }

    export default OrderHistory;