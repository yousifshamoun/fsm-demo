import React from 'react';
import { Link } from 'react-router-dom';
type DispatchListItemProps = {
    index: number;
    date: string;
    dispatchId: number;
    customerName: string;
    phone: string;
    address: string;
    notes: string;
    status: string;
};
const DispatchListItem = (props: DispatchListItemProps) => {
    console.log(props.index);
    return (
        <tr
            className={`${
                props.index % 2 ? 'bg-white' : 'bg-gray-100'
            } shadow text-black text-md`}
        >
            <td className="pt-10 pb-10 pl-5 pr-5">
                <div>{props.date}</div>
            </td>
            <td className="pt-10 pb-10 pl-5 pr-5">
                <div>{props.dispatchId}</div>
            </td>
            <td className="pt-10 pb-10 pl-5 pr-5">
                <div>{props.customerName}</div>
            </td>
            <td className="pt-10 pb-10 pl-5 pr-5">
                <div>{props.phone}</div>
            </td>
            <td className="pt-10 pb-10 pl-5 pr-5">
                <div>{props.address}</div>
            </td>
            <td className="pt-10 pb-10 pl-5 pr-5">
                <div>{props.notes}</div>
            </td>
            <td className="pt-10 pb-10 pl-5 pr-5">
                <div>{props.status}</div>
            </td>
            <td className="pt-10 pb-10 pl-5 pr-5 font-bold text-blue-600">
                <Link to={`/vieworder/${props.dispatchId}`}>Action</Link>
            </td>
        </tr>
    );
};

export default DispatchListItem;
