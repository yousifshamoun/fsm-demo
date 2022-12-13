import { useEffect, useState } from 'react';
import axios from 'axios';
import TechNavBar from '../components/TechNavBar';
import DispatchListItem from '../components/DispatchListItem';
import { useParams } from 'react-router-dom';
const TechnichanViewAllDispatches = () => {
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
            <div className="m-auto w-5/6">
                <aside className="w-1/6">
                    <div className="text-left text-2xl font-bold">Dispatch</div>
                </aside>
                <div className="mt-4 m-auto flex flex-col w-5/6 max-w-7xl">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase shadow">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Date
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Dispatch ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Customer
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Phone
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Address
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Note(s)
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Status
                                </th>
                                <th scope="col" className="py-3 px-6"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order: any, index) => (
                                <DispatchListItem
                                    index={index}
                                    date={order.date}
                                    zip={order.zip}
                                    dispatchId={order.id}
                                    customerName={order.name}
                                    phone={order.phone}
                                    address={order.street}
                                    notes={order.tags}
                                    status={order.status}
                                />
                            ))}
                            {/* {orders.map((order: any, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {order.name}
                            </th>
                            <td className="py-4 px-6">{order.street}</td>
                            <td className="py-4 px-6">{order.unit}</td>
                            <td className="py-4 px-6">{order.zip}</td>
                            <td className="py-4 px-6">{order.phone}</td>
                            <td className="py-4 px-6">{order.job_type}</td>
                            <td className="py-4 px-6">{order.date}</td>
                            <td className="py-4 px-6">{order.time}</td>
                            <td className="py-4 px-6">
                                <p
                                    className={`font-bold
                                        ${
                                            order.priority === "High"
                                                ? "text-red-600"
                                                : order.priority === "Medium"
                                                ? "text-orange-300"
                                                : "text-green-600"
                                        }`}
                                >
                                    {order.priority}
                                </p>
                            </td>
                            <td className="py-4 px-6">{order.notes}</td>
                            <td className="py-4 px-6">
                                <Link
                                    to={`/vieworder/${order.id}`}
                                    className="align-left flex text-white bg-gray-400 font-medium rounded-lg text-sm px-6 py-2 text-center mr-4 mb-2"
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TechnichanViewAllDispatches;
