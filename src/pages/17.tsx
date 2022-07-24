/*************************************************
 * 832: useCallback的一些注意事项，使用useReducer解决方案
 *
 * 1. dispatch自带memoize， re-render时不会发生变化；
 * 2. 在reducer函数里可以获取最新的state。
 *
 * https://segmentfault.com/a/1190000022988054
 ************************************************/
import React, {useCallback, useEffect, useReducer, useRef, useState} from "react";

// // 832: 注意：ExpensiveTree 比较耗时记得使用`React.memo`优化下，要不然父组件优化也没用
const ExpensiveTreeDispatch = React.memo(function (props) {

    console.log('Render ExpensiveTree')
    const { dispatch } = props;
    const dateBegin = Date.now();
    // 很重的组件，不优化会死的那种，真的会死人
    while(Date.now() - dateBegin < 600) {}

    useEffect(() => {
        console.log('Render ExpensiveTree --- DONE')
    })

    return (
        <div onClick={() => { dispatch({type: 'log' })}}>
            <p>很重的组件，不优化会死的那种</p>
        </div>
    )
});

function reducer(state, action) {
    switch(action.type) {
        case 'update':
            return action.preload;
        case 'log':
            console.log(`Text: ${state}`);
            return state;
    }
}

export default function Index() {
    const [text, dispatch] = useReducer(reducer, 'Initial value');
    return (
        <>
            <input value={text} onChange={(e) => dispatch({
                type: 'update',
                preload: e.target.value
            })} />
            <ExpensiveTreeDispatch dispatch={dispatch} />
        </>
    )
}
