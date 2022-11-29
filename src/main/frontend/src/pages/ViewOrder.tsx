import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewOrder = () => {
    const [order, setOrder] = useState({
        name: "",
        street: "",
        unit: "",
        zip: "",
        phone: "",
        job_type: "",
        business_unit: "",
        date: "",
        time: "",
        marketing_campaign: "",
        priority: "",
        technician: "",
        tags: "",
        notes: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/order/${id}`);
        setOrder(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Order Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id : {id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name:</b> {order.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Street:</b> {order.street}
                                </li>
                                <li className="list-group-item">
                                    <b>Phone Number:</b> {order.phone}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ViewOrder;
