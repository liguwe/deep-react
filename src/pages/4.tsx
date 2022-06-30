/**
 * userState 使用
 * 有记忆功能
 * */
import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleAlertClick() {
        //TODO 记住了那一刻
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
