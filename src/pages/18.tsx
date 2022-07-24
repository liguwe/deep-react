/*************************************************
 * 832: useCallback的一些注意事项，使用useReducer + useContext的 解决方案
 *      React官方推荐使用context方式代替通过props传递callback方式
 *
 *
 * https://segmentfault.com/a/1190000022988054
 ************************************************/
import React, {useCallback, useContext, useEffect, useReducer, useRef, useState} from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'update':
            return action.preload;
        case 'log':
            console.log(`Text: ${state}`);
            return state;
    }
}

const TextUpdateDispatch = React.createContext(null);

export default function Index() {
    const [text, dispatch] = useReducer(reducer, 'Initial value');

    return (
        <TextUpdateDispatch.Provider value={dispatch}>
            <input value={text} onChange={(e) => dispatch({
                type: 'update',
                preload: e.target.value
            })} />
            <ExpensiveTreeDispatchContext dispatch={dispatch} />
        </TextUpdateDispatch.Provider>
    )
}

const ExpensiveTreeDispatchContext = React.memo(function (props) {
    console.log('Render ExpensiveTree')
    // 从`context`获取`dispatch`
    const dispatch = useContext(TextUpdateDispatch);

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
