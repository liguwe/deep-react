/**
 * 使用useMemo优化
 * */
import React, {useState, useMemo} from 'react';

const usePow = (list: number[]) => {
    return useMemo(() => {
        list.map((item: number) => {
            // TODO 只打印一次了
            console.log(1)
            return Math.pow(item, 2)
        })
    }, [])
}

const Index = (props: any) => {
    const [flag, setFlag] = useState<boolean>(true)
    const data = usePow([1, 2, 3])
    return (
        <div>
            <div>数字：{JSON.stringify(data)}</div>
            <button onClick={() => {
                setFlag(v => !v)
            }}>切换
            </button>
            <div>切换状态：{JSON.stringify(flag)}</div>
        </div>
    );
}

export default Index

