import { useEffect, useRef } from 'react';

/**
 *
 * @param {*} fn 回调函数
 * @param {*} delay 延迟时间
 * @param {*} options {immediate} 是否立即执行
 */
function useInterval(
    fn:any,
    delay:any,
    options:any,
) {
    const immediate = options?.immediate;
    const fnRef:any = useRef();
    fnRef.current = fn;

    useEffect(() => {
        if (typeof delay !== 'number' || delay < 0) return;
        if (immediate) {
            fnRef.current();
        }

        const timer = setInterval(() => {
            fnRef.current();
        }, delay);

        return () => {
            clearInterval(timer);
        };

    }, [delay]);
}

export default useInterval;
