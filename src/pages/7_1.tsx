import React, {useState, useEffect} from "react";


function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // ::::页面从 0 变为 1，之后就一直展示 1
        let id = setInterval(() => {
            // ::::一直打印1
            console.log('interval val:', count)
            setCount(count + 1);
        }, 1000);
        return () => {
            console.log('销毁：',count);
            clearInterval(id)
        };
    }, []);
    return <h1>{count}</h1>;
}

export default App;
