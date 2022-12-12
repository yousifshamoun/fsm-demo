import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TechNavBar from '../components/TechNavBar';
import DispatchCard from '../components/DispatchCard';
const Technician = () => {
    const { technician } = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get(
            `http://localhost:8080/orders/${technician}`
        );
        setOrders(result.data);
    };
    return (
        <div>
            <TechNavBar />
            <div className="mt-4 m-auto flex flex-col w-5/6 max-w-7xl">
                <p className="text-left text-2xl font-bold">
                    Hello, {technician}
                </p>
                <div className="flex mt-4 -ml-3 space-x-3">
                    <div className="ml-auto order-2 -mt-4">
                        <Link
                            to={`/dispatchlist/${technician}`}
                            className="px-12 bg-transparent hover:bg-blue-100 text-blue-700 font-semibold py-3 border-2 border-blue-700 rounded"
                        >
                            View All Dispatches
                        </Link>
                    </div>
                    {[1, 2, 3, 4].map((idx, item) => (
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#0b33a8"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    ))}
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#0b33a8"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                        </svg>
                    </div>
                    <span className="text-blue-700 font-semibold">
                        43 ratings
                    </span>
                </div>
                <div className="mt-6 grid grid-cols-4 space-x-4">
                    <DispatchCard
                        svg={
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
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                />
                            </svg>
                        }
                        numberOfItems={2}
                        alertMessage={'Unscheduled'}
                        description={
                            'No appointment set within 24 hours of creation.'
                        }
                    />
                    <DispatchCard
                        svg={
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
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                            </svg>
                        }
                        numberOfItems={1}
                        alertMessage={'Status Update Needed'}
                        description={
                            'No status updates set within 48 hours of creation.'
                        }
                    />
                    <DispatchCard
                        svg={
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
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        }
                        numberOfItems={1}
                        alertMessage={'Open Longer than Expected'}
                        description={
                            "Jobs that have been open for more than a trade's average time period."
                        }
                    />
                    <DispatchCard
                        svg={
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
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        }
                        numberOfItems={0}
                        alertMessage={'Autho Status Updated'}
                        description={
                            'Jobs that have been approved or rejected from authorization and require follow up.'
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Technician;
