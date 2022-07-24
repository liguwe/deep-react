/*************************************************
 *
 * 如何阻止React事件冒泡
 *
 *  // ::::阻止了react app click，但是没能阻止原生事件
 *  react button click
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
        // ::::e.stopPropagation() 可以阻止合成事件之间的冒泡
        e.stopPropagation();
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
