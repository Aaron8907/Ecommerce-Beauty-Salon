    import React from "react";
    import { Link } from "react-router-dom";
    import { useQuery } from "@apollo/client";
    import { QUERY_USER } from "../utils/queries";
    import Footer from "../components/Footer";

    function OrderHistory() {
        const { data } = useQuery(QUERY_USER);
        let user;

        if (data) {
            user = data.user;
            console.log(user);
        }

        return (
            <section>
                <section className="container my-1 ticket">
                    <Link className="btn-signup" to="/">← Back to Products</Link>
                    {user ? (
                        <div className="t-wrapper">
                            <h2>
                                Order History for {user.firstName} {user.lastName}
                            </h2>
                            {user.orders.map((order) => (
                                <div key={order._id} className="my-2 t-data">
                                    <h3>
                                        {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                    </h3>
                                    <div className="flex-row t-items">
                                        {order.products.map(({ _id, image, name, price }, index) => (
                                            <div key={index} className="card px-1 py-1">
                                                <Link to={`/products/${_id}`} className="t-content">
                                                    <img alt={name} src={`/images/${image}`} />
                                                    <p>{name}</p>
                                                </Link>
                                                <div className="price">
                                                    <span>${price}</span>
                                                </div>
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