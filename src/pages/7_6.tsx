// ::::自己实现一个倒计时页面
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
    const [count, setCount] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            // ::::必须接受一个函数作为参数
            setCount(c => c - 1);
            // ::::下面这段代码就只会倒计时到59，后面就不会动了
            // setCount( count - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])


    return (
        // @ts-ignore
        <div style={style}>{count}s</div>
    )
}
