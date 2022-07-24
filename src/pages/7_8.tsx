// ::::自己实现一个倒计时页面
// ::::使用 ahook 的setInterver

import React, {useState, useEffect, useRef} from 'react';
import useInterval from '../hooks/umi-useInterval';

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
    const [count, setCount] = useState(60);

    useInterval(() => {
        setCount(count - 1);
    }, 1000, {})

    return (
        // @ts-ignore
        <div style={style}>{count}s</div>
    )
}
