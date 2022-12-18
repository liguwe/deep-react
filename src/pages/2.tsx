/**
 * 使用useMemo优化
 *
 * */
import React, {useState} from 'react';

const usePow = (list: number[]) => {
    return list.map((item: number) => {
        // TODO 每次都会打印 1
        console.log(1);
        return Math.pow(item, 2)
    })
}

const Index = (props: any) => {

    const [flag, setFlag] = useState<boolean>(true)

    const data = usePow([1, 2, 3])

    console.log(3);  //  打印3次
    // ::::
    return (
        <div>
            <div>数字：{JSON.stringify(data)}</div>
            <button onClick={() => {
                // ::::注意这里，改成false后就不再更改了，但是只会打印3次
                setFlag(false)
                // setFlag(v => !v)
            }}>切换
            </button>
            <div>切换状态：{JSON.stringify(flag)}</div>
        </div>
    );
}

export default Index

