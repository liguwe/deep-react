import React, {useState, useEffect} from "react";

function Counter() {

    const [count, setCount] = useState(0);

    // :::: Capture Value 特性,弹框后，延迟，记住的是那一刻的值
    // ::::每次渲染相互独立，因此每次渲染时组件中的状态、事件处理函数等等都是独立的，或者说只属于所在的那一次渲染
    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={handleAlertClick}>
                Show alert
            </button>
        </div>
    );
}

export default Counter;
