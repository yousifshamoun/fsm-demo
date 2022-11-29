import React from "react";

const TechNavBar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
                <div className="flex items-center">
                    <svg
                        width="5%"
                        height="5%"
                        viewBox="0 0 492.5 492.5"
                        fill="coral"
                    >
                        <path
                            d="M184.646,0v21.72H99.704v433.358h31.403V53.123h53.539V492.5l208.15-37.422v-61.235V37.5L184.646,0z M222.938,263.129
                    c-6.997,0-12.67-7.381-12.67-16.486c0-9.104,5.673-16.485,12.67-16.485s12.67,7.381,12.67,16.485
                    C235.608,255.748,229.935,263.129,222.938,263.129z"
                        />
                    </svg>
                    <span className="ml-3 text-xl font-extrabold">
                        Contractor Portal
                    </span>
                    <ul className="flex flex-row space-x-8 ml-6 text-lg font-semibold">
                        <li
                            className="text-blue-500
                        hover:bg-blue-100"
                        >
                            Home
                        </li>
                        <li
                            className="text-blue-500
                        hover:bg-blue-100"
                        >
                            Dispatches
                        </li>
                        <li
                            className="text-blue-500
                        hover:bg-blue-100"
                        >
                            Invoices
                        </li>
                        <li
                            className="text-blue-500
                        hover:bg-blue-100"
                        >
                            Performance
                        </li>
                        <li
                            className="text-blue-500
                        hover:bg-blue-100"
                        >
                            My Company
                        </li>
                    </ul>
                </div>
                <div className="flex justify-end">
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
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </div>
            </nav>
        </div>
    );
};

export default TechNavBar;
