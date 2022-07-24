/*************************************************
 *
 *
 * // ::::这里使用useCallback来实现子组件不重复渲染，直接使用缓存
 *
 *
 * // ::::useCallback 缓存的是函数，useMemo 缓存的是函数执行后的值。
 *
 * 即
 ************************************************/

import React, {useState, useEffect, useCallback, useMemo} from "react";

const ChildComponent = (props) => {
    console.log("ChildComponent Running");
    return (
        <div>
            {`这里是 ChildComponent`}
            <button onClick={props.handleAddCat}>add cat</button>
        </div>
    );
};



// in APP.js
export default function App() {
    const [dogCount, setDogCount] = useState(0);
    const [catCount, setCatCount] = useState(0);

    const handleAddDog = () => {
        setDogCount(dogCount + 1);
    };

    // ::::useCallback(fn, [deps]) 等价于 useMemo(() => fn, [deps])
    const handleAddCat = useMemo(() => {
        return () => {
            setCatCount(catCount + 1);
        }
        // ::::仅仅在catCount变化时，才会去执行
    }, [catCount]);


    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>dog:{dogCount}</h2>
            <h2>cat:{catCount}</h2>
            <button onClick={handleAddDog}>add dog click</button>
            // ::::这个函数要传给子组件,函数是一个引用类型
            <ChildComponent handleAddCat={handleAddCat}/>
        </div>
    );
}

