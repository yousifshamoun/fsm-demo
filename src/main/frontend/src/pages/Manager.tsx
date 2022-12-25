import Navbar from '../components/Navbar';
import axios from 'axios';
import { order } from '../components/Order';
import { useEffect, useState } from 'react';
const Manager = () => {
    const [allResults, setAllResults] = useState<order[]>([]);
    const [allTechnicians, setAllTechnicians] = useState<any>({
        Ted: 0,
        Bradley: 0,
        Samuel: 0,
    });
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/orders`);
        setAllResults(result.data);
    };

    const countTechnicians = () => {
        for (let i = 0; i < allResults.length; i += 1) {
            setAllTechnicians({
                ...allTechnicians,
                [allResults[i].technician]: (allTechnicians[
                    allResults[i].technician
                ] += 1),
            });
        }
    };
    console.log(allResults);
    return (
        <div>
            <Navbar />
            <div className=" px-96">
                <div>
                    <p className="text-xl text-left">Dashboard</p>
                    <button type="button" onClick={countTechnicians}>
                        Hello
                    </button>
                    <button
                        className="ml-4"
                        type="button"
                        onClick={() => console.log(allTechnicians)}
                    >
                        Hell
                    </button>
                </div>
                <div>
                    <p className="text-xl text-left">Company Metrics</p>
                </div>
                <div>
                    <p className="text-xl text-left">Overview</p>
                </div>
            </div>
        </div>
    );
};

export default Manager;
