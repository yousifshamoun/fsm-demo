import React from 'react';
import { Link } from 'react-router-dom';
type DispatchListItemProps = {
    index: number;
    date: string;
    zip: string;
    dispatchId: string;
    customerName: string;
    phone: string;
    address: string;
    notes: string;
    status: string;
};
export const getSVG = (status: string) => {
    switch (status) {
        case 'new':
            return (
                <div className="flex items-center bg-yellow-200 rounded-xl justify-center p-1 px-2 font-bold text-amber-900 text-xs w-fit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                        />
                    </svg>
                    New
                </div>
            );
        case 'inProgress':
            return (
                <div className="flex items-center bg-yellow-200 rounded-xl justify-center p-1 px-2 font-bold text-amber-900 text-xs w-fit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    In Progress
                </div>
            );
        case 'completed':
            return (
                <div className="flex items-center bg-green-200 rounded-xl justify-center p-1 px-2 font-bold text-xs w-fit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="rgb(34 197 94 / var(--tw-bg-opacity))"
                        className="w-3 h-3 "
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Completed
                </div>
            );
    }
};
const DispatchListItem = (props: DispatchListItemProps) => {
    return (
        <tr
            className={`${
                props.index % 2 ? 'bg-white' : 'bg-gray-100'
            } shadow text-black text-md`}
        >
            <td className="pt-10 pb-10 pl-3 pr-3">
                <div>{props.date}</div>
            </td>
            <td className="pt-10 pb-10 pl-3 pr-3">
                <div>{props.dispatchId}</div>
            </td>
            <td className="pt-10 pb-10 pl-3 pr-3">
                <div>{props.customerName}</div>
            </td>
            <td className="pt-10 pb-10 pl-3 pr-3">
                <div>{props.phone}</div>
            </td>
            <td className="pt-10 pb-10 pl-3 pr-3">
                <div>{props.address + ', ' + props.zip}</div>
            </td>
            <td className="pt-10 pb-10 pl-3 pr-3">
                <div>{props.notes}</div>
            </td>
            <td className="pt-10 pb-10 pl-3 pr-3">{getSVG(props.status)}</td>
            <td className="pt-10 pb-10 pl-3 pr-3 font-bold text-blue-600">
                <Link to={`/vieworder/${props.dispatchId}`}>Action</Link>
            </td>
        </tr>
    );
};

export default DispatchListItem;
