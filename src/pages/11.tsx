/*************************************************
 *
 * memo、useCallback、useMemo、React.PureComponent 傻傻分不清
 ************************************************/
import React, {useState, useMemo, memo} from "react";

//::::我根本不需要使用state count，但还是把我给渲染了
const ChildComponent = () => {
    console.log("ChildComponent Running");
    return <div>{`这里是 ChildComponent`}</div>;
};

export default function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>{count}</h2>
            <button onClick={handleClick}>click</button>
            <ChildComponent/>
        </div>
    );
}
