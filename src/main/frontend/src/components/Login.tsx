import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [technician, setTechnician] = useState("");
    const onInputChange = (e: any) => {
        setTechnician(e.target.value);
    };
    return (
        <div className="justify-center items-center flex">
            <form className="px-80 mx-20 mt-4 w-full">
                <div className="mb-4">
                    <label
                        className="text-left	block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={technician}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="text-left	block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Link
                        to={`/technician/${technician}`}
                        className="text-left text-sm text-sky-900 hover:text-sky-700"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <Link
                    to={"/dispatch"}
                    className="w-full mt-4 bg-sky-900 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Sign In
                </Link>
            </form>
        </div>
    );
};

export default Login;
