import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TechNavBar from '../components/TechNavBar';
import { getSVG } from '../components/DispatchListItem';
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
    const [showDialogue, setShowDialogue] = useState(false);
    const handleDialogue = (status: boolean) => setShowDialogue(status);
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
    const Items = [
        ['Customer Name', name],
        ['Customer Phone', phone],
        ['Address', street],
        ['Type', tags],
        ['Status', getSVG(status)],
        ['Items', technician],
        ['Priority', priority],
        ['Unit', business_unit],
    ];
    function DialogueBox() {
        return (
            <div>
                <div className="bg-black/[.6] inset-0 fixed"></div>
                <div className="inset-y-1/3 inset-x-1/4 fixed bg-white rounded flex flex-wrap p-4">
                    <div className="ml-auto mr-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <div className="w-full border-b-2">
                        <p className="font-bold text-2xl text-left">
                            Update Dispatch
                        </p>
                    </div>
                    <div className="w-full flex flex-wrap">
                        <div className="flex-auto">
                            <p className="font-bold text-left ml-2">Item</p>
                        </div>
                        <div className="flex-auto">
                            <p className="font-bold text-left ml-2">Status</p>
                        </div>
                        <div className="flex-auto">
                            <p className="font-bold text-left ml-2">Add Note</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="font-bold text-xl">Update Dispatch</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {showDialogue ? <DialogueBox /> : null}
            <TechNavBar />
            <div className="w-5/6 m-auto mt-4 text-left">
                <div className="text-md font-semibold">Dispatch Details</div>
                <div className="mt-4 font-bold text-xl">Dispatch: {id}</div>
                <button
                    onClick={() => handleDialogue(true)}
                    type="button"
                    className="mt-4 bg-sky-800 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Update Dispatch
                </button>
                <div className="p-3 mt-4 border-2 rounded shadow-lg grid grid-cols-4 gap-2">
                    {Items.map((item: any[]) => (
                        <div className="font-bold">
                            {item[0]}
                            <p className="font-normal">{item[1]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ViewOrder;
