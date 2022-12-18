/*************************************************
 *
 * 如何阻止React事件冒泡
 *
 * =====>
 *
 * react button click
 * react app click
 *
 *
 ************************************************/

import React, {useEffect, useRef} from 'react';

export default function Demo() {
    const appRef: any = useRef();
    const btnRef: any = useRef();

    useEffect(() => {
        document.addEventListener('click', function (e: any) {
            // ::::阻止合成事件与除最外层document上的原生事件上的冒泡，通过判断e.target来避免
            if (e.target.className === 'btn') {
                return;
            }
            console.log('document click')
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
            <button className={'btn'} ref={btnRef} onClick={onBtnClick}>按钮</button>
        </div>
    )
}
