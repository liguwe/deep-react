/*************************************************
 *
 * 使用useRef来解决
 *
 * 832: useCallback的一些注意事项，自定义一个hooks
 *
 *      1. 通过useRef保持变化的值，
 *      2. 通过useEffect更新变化的值;
 *      3. 通过useCallback返回固定的callback。
 *
 *
 * https://segmentfault.com/a/1190000022988054
 ************************************************/
import React, {useCallback, useEffect, useRef, useState} from "react";

// // 832: 注意：ExpensiveTree 比较耗时记得使用`React.memo`优化下，要不然父组件优化也没用
const ExpensiveTree = React.memo(function (props) {

    console.log('Render ExpensiveTree')
    const { onClick } = props;
    const dateBegin = Date.now();
    // 很重的组件，不优化会死的那种，真的会死人
    while(Date.now() - dateBegin < 600) {}

    useEffect(() => {
        console.log('Render ExpensiveTree --- DONE')
    })

    return (
        <div onClick={onClick}>
            <p>很重的组件，不优化会死的那种</p>
        </div>
    )
});

// 832: 自定义Hooks
function useEventCallback(fn) {
    const ref = useRef(fn);

    useEffect(() => {
        // 每次re-render都会执行这里（逻辑简不影响性能），保证fn永远是最新的
        ref.current = fn;
    })

    return useCallback(() => {
        ref.current && ref.current(); // 通过ref.current访问最新的回调函数
    }, [])

}

export default function Index() {
    const [text, updateText] = useState('Initial value');

    const handleSubmit = useEventCallback(() => {
        console.log(`Text: ${text}`);
    }, [text]);

    return (
        <>
            <input value={text} onChange={(e) => updateText(e.target.value)} />
            <ExpensiveTree onClick={handleSubmit} />
        </>
    )
}
