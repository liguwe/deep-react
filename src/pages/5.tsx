/*************************************************
 * 如何阻止React事件冒泡
 * 以及React中事件是如何传递的
 *
 *
 * ==> // ::::默认行为，打印顺序如下
 *     // :::: 原生事件（非document） →  React 事件 →  原生事件
 *
 *          btn click
 * 5.tsx:20 btn click
 * 5.tsx:24 app click
 * 5.tsx:24 app click
 * 5.tsx:29 react button click
 * 5.tsx:33 react app click
 * 5.tsx:17 document click
 * 5.tsx:16 document click
 * 5.tsx:14 window click
 * 5.tsx:13 window click
 *
 *
 *
 *
 *
 ************************************************/

import React, {useEffect, useRef} from 'react';

export default function Demo() {
    const appRef: any = useRef();
    const btnRef: any = useRef();

    useEffect(() => {
        window.addEventListener('click', function () {
            console.log('window click')
        })
        document.addEventListener('click', function () {
            console.log('document click')
        })
        // @ts-ignore
        btnRef.current.addEventListener('click', function () {
            console.log('btn click');
        })
        // @ts-ignore
        appRef.current.addEventListener('click', function () {
            console.log('app click');
        })
    }, []);

    function onBtnClick(e: any) {
        console.log('react button click');
    }

    function onAppClick(e: any) {
        console.log('react app click');
    }

    return (
        <div className="App" ref={appRef} onClick={onAppClick}>
            <button ref={btnRef} onClick={onBtnClick}>按钮</button>
        </div>
    )
}
