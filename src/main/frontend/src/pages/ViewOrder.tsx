import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TechNavBar from '../components/TechNavBar';
const ViewOrder = () => {
    const [order, setOrder] = useState({
        name: '',
        street: '',
        unit: '',
        zip: '',
        phone: '',
        job_type: '',
        business_unit: '',
        date: '',
        time: '',
        marketing_campaign: '',
        priority: '',
        technician: '',
        tags: '',
        notes: '',
        status: '',
    });
    const {
        name,
        street,
        unit,
        zip,
        phone,
        job_type,
        business_unit,
        date,
        time,
        marketing_campaign,
        priority,
        technician,
        tags,
        notes,
        status,
    } = order;
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/order/${id}`);
        setOrder(result.data);
    };
    const onInputChange = (e: any) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = async (e: any) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/order/${id}`);
    };

    return (
        <div>
            <TechNavBar />
            <div className="w-5/6 m-auto mt-4 text-left">
                <div className="text-md font-semibold">Dispatch Details</div>
                <div className="mt-4 font-bold text-xl">Dispatch: {id}</div>
                <Link
                    to={'/'}
                    type="button"
                    className="mt-4 bg-sky-800 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Update Dispatch
                </Link>
                <div className="p-3 mt-4 border-2 rounded shadow-lg grid grid-flow-col">
                    <div className="col-span-1">1</div>
                    <div className="col-span-1">2</div>
                    <div className="col-span-1">3</div>
                    <div className="col-span-1">4</div>
                </div>
            </div>
        </div>
    );
};
export default ViewOrder;
