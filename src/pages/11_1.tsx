/*************************************************
 * // ::::使用PureComponent来解决
 *
 * // ::::PureComponent 实现了 shouldComponentUpdate 方法，
 *        可以对 props 和 state 进行浅比较，从而优化组件渲染。
 ************************************************/

import React, {useState, useMemo, memo} from "react";
class Greeting extends React.PureComponent {

    render() {
        console.log('PureComponent');
        return <h1>Hello, {this.props.name}</h1>;
    }
}

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
            <Greeting/>
            {/*// ::::每次都会打印*/}
            {/*<Greeting  name={count}/>*/}
        </div>
    );

}
