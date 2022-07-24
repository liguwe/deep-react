import React, {useState, useEffect} from "react";


function App() {

    const [count, setCount] = useState(0);
    console.log('render:', count);

    useEffect(() => {
        // ::::setCount(val=>val+1) 形成一个闭包，就正常了
        let id = setInterval(() => {
            console.log('interval val:', count)
            setCount(val => val + 1);
        }, 1000);
        return () => {
            console.log('销毁：',count);
            clearInterval(id)
        };
    }, []);

    return <h1>{count}</h1>;

}

export default App;
