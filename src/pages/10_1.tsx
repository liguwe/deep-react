/*************************************************
 * // ::::自定义Hooks
 *
 * // ::::使用useCallback 来解决 解决重复发请求的问题
 ************************************************/

import {useState, useEffect,useCallback} from "react";

const BASE_URL = "https://corona.lmao.ninja/v2";

export function useCoronaAPI(
    path,
    {
        initialData = null,
        converter = (data) => data,
        refetchInterval = null
    }
) {
    const [data, setData] = useState(initialData);

    // ::::关键，使用useCallback ,就能保证返回的是同一函数的引用
    const convertData = useCallback(converter, []);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${BASE_URL}${path}`);
            const data = await response.json();
            setData(converter(data));
        };
        fetchData();

        if (refetchInterval) {
            const intervalId = setInterval(fetchData, refetchInterval);
            return () => clearInterval(intervalId);
        }
    }, [converter, path, refetchInterval]);

    return data;
}

