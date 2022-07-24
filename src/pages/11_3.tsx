/*************************************************
 * // ::::React.memo 有缺陷。如果传入的是一个引用数据类型，那么在修改与子组件无关的 state 时，
 *      ChildComponet 依然会重新执行
 *
 *
 *      可以使用使用 useCallback 来为引用类型地址做一个缓存
 *
 * https://juejin.cn/post/6987745184779878408#heading-1
 ************************************************/

import React, {useState, useEffect} from "react";

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

    // 这个函数要传给子组件
    // ::::这是因为 click 后 state 发生变化，那么父组件（App.js）会重新执行
    //  导致引用类型会被重新创建（引用地址发生改变），
    //  子组件（ChildComponent.js）会认为 props 发生改变，从而重新执行。
    const handleAddCat = () => {
        // ::::每次都会重新定义
        console.log('重新定义一遍');
        setCatCount(catCount + 1);
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>dog:{dogCount}</h2>
            <h2>cat:{catCount}</h2>
            <button onClick={handleAddDog}>add dog click</button>
            <ChildComponent handleAddCat={handleAddCat}/>
        </div>
    );
}

