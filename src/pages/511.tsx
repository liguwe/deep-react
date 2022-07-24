/**
 * 我们先实现获取全球数据概况（每 5 秒重新获取一次
 * */

import React, {useState, useEffect} from "react";


function Stat({number, color}: any) {
    return <span style={{color: color, fontWeight: "bold"}}>{number}</span>;
}

function GlobalStats({stats}: any) {
    const {cases, deaths, recovered, active, updated} = stats;
    return (
        <div className='global-stats'>
            <small>Updated on {new Date(updated).toLocaleString()}</small>
            <table>
                <tr>
                    <td>
                        Cases: <Stat number={cases} color='red'/>
                    </td>
                    <td>
                        Deaths: <Stat number={deaths} color='gray'/>
                    </td>
                    <td>
                        Recovered: <Stat number={recovered} color='green'/>
                    </td>
                    <td>
                        Active: <Stat number={active} color='orange'/>
                    </td>
                </tr>
            </table>
        </div>
    );
}


const BASE_URL = "https://corona.lmao.ninja/v2";

function App() {
    const [globalStats, setGlobalStats] = useState({});

    useEffect(() => {
        const fetchGlobalStats = async () => {
            const response = await fetch(`${BASE_URL}/all`);
            const data = await response.json();
            setGlobalStats(data);
        };
        fetchGlobalStats();
        const intervalId = setInterval(fetchGlobalStats, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='App'>
            <h1>COVID-19</h1>
            <GlobalStats stats={globalStats}/>
        </div>
    );
}

export default App;
