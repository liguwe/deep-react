import React, {useState, useEffect} from "react";

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let id = setInterval(() => {
            console.log('interval val:', count)
            setCount(count + 1)
        }, 1000);
        return () => clearInterval(id);
        // ::::取消依赖dep，也能正常打印
    });
    return <h1>{count}</h1>;
}

export default App;
