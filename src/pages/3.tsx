/**
 * useCallback与useMemo极其类似:
 * 唯一不同的是
 * 1、 useMemo返回的是函数运行的结果
 * 2、 而useCallback返回的是函数
 *
 * 注意：
 * 1、这个函数是父组件传递子组件的一个函数，防止做无关的刷新，
 * 2、其次，这个组件必须配合memo, 否则不但不会提升性能，还有可能降低性能
 * */


import React, {useState, useCallback} from 'react';


const TestButton = React.memo((props: any) => {
    // console.log(props.title)
    console.log(1111)
    return <button onClick={props.onClick}
                   style={props.title === 'useCallback点击' ? {
                       marginLeft: 20
                   } : undefined}>{props.title}</button>
})


const MockMemo: React.FC<any> = () => {

    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)

    const add = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                <TestButton title="普通点击+1"
                            onClick={() => setCount(count + 1)}
                />
                <TestButton title="useCallback点击+1" onClick={add}/>
            </div>

            <div style={{marginTop: 20}}>count: {count}</div>
            {/* TODO 这里点击切换时，因为count没变，所以不会导致 usecallback后面的数据变化 */}
            <button onClick={() => {
                setShow(!show)
            }}> 切换
            </button>
        </div>
    )
}


export default MockMemo;
