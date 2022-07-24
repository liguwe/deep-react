/*************************************************
 *
 *  // ::::可以使用使用 useCallback 来为引用类型地址做一个缓存
 *
 ************************************************/

import React, {useState, useEffect, useCallback} from "react";

const ChildComponent = (props) => {
    console.log("ChildComponent Running");
    return (
        <div>
            {`这里是 ChildComponent：`}
            <button onClick={props.handleAddCat}>add cat</button>
        </div>
    );
};

/*************************************************
 * // li's notes: React.memo 为高阶组件。使用注意点
 *      1. 如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。
 *      2. 默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现
 *      3. 此方法仅作为性能优化的方式而存在。但请不要依赖它来“阻止”渲染，因为这会产生 bug。
 ************************************************/

const ChildComponentMemo = React.memo(ChildComponent);


// in APP.js
export default function App() {
    const [dogCount, setDogCount] = useState(0);
    const [catCount, setCatCount] = useState(0);

    const handleAddDog = () => {
        setDogCount(dogCount + 1);
    };

    // 这个函数要传给子组件
    // dogCount 改变后，handleAddCat 的地址不会发生改变
    // ChildComponent 也不会重新执行
    const handleAddCat = useCallback(() => {

        // ::::这里还是会重新定义呀？？？

        console.log('重新定义一遍');
        setCatCount(catCount + 1);

        // ::::仅仅在catCount变化时，才会去执行

    }, [catCount]);


    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>dog:{dogCount}</h2>
            <h2>cat:{catCount}</h2>
            <button onClick={handleAddDog}>add dog click</button>
            {/*// ::::这个函数要传给子组件,函数是一个引用类型*/}
            <ChildComponentMemo handleAddCat={handleAddCat}/>
        </div>
    );
}

