// ::::”永不停止“的计数器：

import React, {useState, useEffect, useRef} from 'react';

const style = {
    width: '60px',
    height: '60px',
    borderRadius: '30px',
    background: 'rgba(0,0,0,.5)',
    textAlign: 'center',
    lineHeight: '60px',
    color: 'white',
    margin: '100px'
}

export default function Test() {
    const [count, setCount] = useState(0);

    // ::::没有提供deps，setTimeout会一直执行
    // ::::我们的组件陷入了 渲染 => 触发Effect => 修改状态 => 触发重渲染的无限循环
    useEffect(() => {
        setTimeout(() => setCount(count + 1), 1000);
    });

    return (
        <div className="App">
            <h1>{count}</h1>
        </div>
    );

}
