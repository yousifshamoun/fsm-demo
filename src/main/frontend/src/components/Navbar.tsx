import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
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
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
