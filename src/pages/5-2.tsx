/*************************************************
 *
 * 如何阻止React事件冒泡
 *
 * button click
 * react app click
 *
 ************************************************/

import React, {useEffect, useRef} from 'react';

export default function Demo() {
    const appRef: any = useRef();
    const btnRef: any = useRef();

    useEffect(() => {
        document.addEventListener('click', function () {
            console.log('document click')
        })
    }, []);

    function onBtnClick(e: any) {
        // ::::e.nativeEvent.stopImmediatePropagation()阻止 原生document上同类事件的调用
        e.nativeEvent.stopImmediatePropagation()
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
