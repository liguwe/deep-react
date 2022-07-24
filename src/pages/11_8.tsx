/*************************************************
 * React.memo 与 useMemo
 * https://zhuanlan.zhihu.com/p/105940433
 *
 * // ::::????没太明白为啥ChildMemo还会影响Child，自己点点就知道了！！1
 *
 ************************************************/


// function MyComponent(props) {
//     /* render using props */
// }
// function areEqual(prevProps, nextProps) {
//     /*
//     return true if passing nextProps to render would return
//     the same result as passing prevProps to render,
//     otherwise return false
//     */
// }
// export default React.memo(MyComponent, areEqual);


import React, {useState,} from 'react';


// ::::父组件的任何props变化（包括其他的参数），都会导致它重新渲染
const Child = (props = {}) => {
    console.log(`--- Child re-render ---`);
    return (
        <div>
            <p>number is : {props.number}</p>
        </div>
    );
};


const isEqual = (prevProps, nextProps) => {
    if (prevProps.number !== nextProps.number) {
        return false;
    }
    return true;
}

// ::::使用React.memo来优化，避免重复渲染
const ChildMemo = React.memo((props) => {
    console.log(`--- ChildMemo re-render ---`);
    return (
        <div>
            <p>number is : {props.number}</p>
        </div>
    );
}, isEqual);

export default (props = {}) => {

    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const handleSetStep = () => {
        setStep(step + 1);
    }

    const handleSetCount = () => {
        setCount(count + 1);
    }

    const handleCalNumber = () => {
        setNumber(count + step);
    }


    return (
        <div>
            <button onClick={handleSetStep}>step is : {step} </button>
            <button onClick={handleSetCount}>count is : {count} </button>
            <button onClick={handleCalNumber}>numberis : {number} </button>

            <hr/>

            <Child step={step} count={count} number={number}/>

            <hr/>

            <ChildMemo step={step} count={count} number={number}/>

        </div>
    );
}
