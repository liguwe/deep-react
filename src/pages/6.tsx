import React, {useState, useEffect} from "react";

export default function EndlessCounter() {
    const [count, setCount] = useState(0);

    // 没有加依赖，会陷入死循环
    useEffect(() => {
        // ::::无限循环了
        setCount(count + 1)
        // let timeId = setInterval(() => setCount(count + 1), 1000);
        // return () => clearTimeout(timeId);
    });
    return (
        <div className="App">
            <h1>{count}</h1>
        </div>
    );
}



