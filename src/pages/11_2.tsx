/*************************************************
 * // ::::使用React.Memo来优化
 *      // ::::，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果
 ************************************************/

import React, {useState, useMemo, memo} from "react";

class Greeting extends React.Component {
    render() {
        console.log('React.Component render....');
        return <h1>Hello, {this.props.name}</h1>;
    }
}


const MemoGreeting = React.memo(Greeting, (prevProps, nextProps) => {
    // console.log(nextProps,prevProps);
    console.log(prevProps.name !== nextProps.name);
    // ::::返回true,就阻止渲染了，但请不用
    // ::::此方法仅作为性能优化的方式而存在。但请不要依赖它来“阻止”渲染，因为这会产生 bug。
    return prevProps.name !== nextProps.name;

})

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
            <MemoGreeting name={count} id={'1'}/>
        </div>
    );

}
