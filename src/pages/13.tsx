/*************************************************
 * 832: useCallback的一些注意事项
 * https://segmentfault.com/a/1190000022988054
 ************************************************/


import {useCallback, useState} from "react";

export default function Index() {
    const [text, updateText] = useState('Initial value');

    const handleSubmit = useCallback(() => {
        // 832: fix 每次输出都是初始值
        console.log(`Text: ${text}`);
    }, [text]);

    return (
        <>
            <input value={text} onChange={(e) => updateText(e.target.value)}/>
            <button onClick={handleSubmit}>submit(每次提交都是初始值)</button>
        </>
    )
}
