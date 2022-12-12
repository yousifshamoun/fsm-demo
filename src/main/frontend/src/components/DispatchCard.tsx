import React from "react";
type DispatchCardProps = {
    svg: any;
    numberOfItems: number;
    alertMessage: string;
    description: string;
};
const DispatchCard = (props: DispatchCardProps) => {
    return (
        <div className="shadow-md flex flex-col px-10 py-8">
            <div className="flex justify-center items-center">{props.svg}</div>
            <p className="text-2xl font-bold">{props.numberOfItems}</p>
            <div className="flex justify-center items-center">
               {props.numberOfItems > 0 ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#b02121"
                    className="w-6 h-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                    />
                </svg> : 
                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#21b05a"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                />
                            </svg>}
                <p className={`font-semibold ${props.numberOfItems > 0 ? "text-[#b02121]" : "text-[#21b05a]"}`}>
                    {props.alertMessage}
                </p>
            </div>
            <p>{props.description}</p>
            {props.numberOfItems > 0 && (
                <button
                    className="mt-auto
                        bg-transparent hover:bg-blue-100 text-blue-700 font-semibold py-1 border-2 border-blue-700 rounded"
                >
                    View Dispatches
                </button>
            )}
        </div>
    );
};

export default DispatchCard;
