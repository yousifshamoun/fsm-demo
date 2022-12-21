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
            [e.target.name]: parseOption(e.target.value),
        });
    };
    const onSubmit = async (e: any) => {
        await axios.put(`http://localhost:8080/order/${id}`, order);
        handleDialogue(false);
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
    const parseOption = (s: string): string => {
        if (s === 'New') {
            return 'new';
        } else if (s === 'In Progress') {
            return 'inProgress';
        } else if (s === 'Completed') {
            return 'completed';
        } else {
            throw new Error('Invalid Option Being Parsed');
        }
    };
    const parseValue = (s: string): string => {
        if (s === 'new') {
            return 'New';
        } else if (s === 'inProgress') {
            return 'In Progress';
        } else if (s === 'completed') {
            return 'Completed';
        } else {
            throw new Error('Invalid Value Being Parsed');
        }
    };
    function DialogueBox() {
        return (
            <div>
                <div className="bg-black/[.6] inset-0 fixed"></div>

                <div className="inset-y-1/3 inset-x-1/4 fixed bg-white rounded flex flex-wrap p-4">
                    <div
                        className="ml-auto mr-0 cursor-pointer h-0"
                        onClick={() => handleDialogue(false)}
                    >
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
                            <div className="relative">
                                <select
                                    className="first-letter:block appearance-none w-full bg-white border border-gray-400 py-2 px-4 pr-8 rounded leading-snug focus:outline-none focus:bg-white focus:border-gray-500 "
                                    id="set-status"
                                    value={parseValue(status)}
                                    name="status"
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option>New</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto">
                            <p className="font-bold text-left ml-2">Add Note</p>
                        </div>
                    </div>
                    <div className=" ml-auto mr-0">
                        <button
                            className="font-bold text-sky-600 mr-4"
                            onClick={() => handleDialogue(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={onSubmit}
                            className="bg-sky-800 hover:bg-sky-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                        >
                            Update Dispatch
                        </button>
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
