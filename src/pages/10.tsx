/*************************************************
 * // ::::自定义Hooks
 *
 * // ::::一个问题，重复请求，一直请求
 ************************************************/

import {useState, useEffect} from "react";

const BASE_URL = "https://corona.lmao.ninja/v2";

export function useCoronaAPI(
    path,
    {
        initialData = null,
        // ::::Object.is 进行比较，函数肯定不等于函数，
        converter = (data) => data,
        refetchInterval = null
    }
) {
    const [data, setData] = useState(initialData);

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

// ::::使用自定义hooks
const countries = useCoronaAPI(`/countries?sort=${key}`, {
    initialData: [],
    // ::::问题出现在这儿，每次都会有个函数，
    converter: (data) => data.slice(0, 10),
});


