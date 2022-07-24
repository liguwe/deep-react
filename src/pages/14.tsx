/*************************************************
 * 832: useCallback的一些注意事项
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

export default function Index() {
    const [text, updateText] = useState('Initial value');


    const handleSubmit = useCallback(() => {
        console.log(`Text: ${text}`);
    }, [text]);

    return (
        <>
            <input value={text} onChange={(e) => updateText(e.target.value)} />
            <ExpensiveTree onClick={handleSubmit} />
        </>
    )
}
