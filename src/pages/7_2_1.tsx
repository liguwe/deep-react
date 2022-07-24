import React, {useState, useEffect, useRef} from "react";


function App() {

    const [count, setCount] = useState(0);

    const ref: any = useRef();

    useEffect(() => {
        // 及时更新 count 值
        ref.current = count;
    });

    useEffect(() => {
        let id = setInterval(() => {
            // ::::使用useRef，来保证每次打印最新的值
            console.log('ref.current:', ref.current);
            ref.current = count;
            setCount(val => val + 1);

        }, 1000);
        return () => clearInterval(id);
    }, []);

    return <h1>{count}</h1>;

}

export default App;
