
import React, {useState, useRef, useCallback} from 'react';


const Index = (props: any) => {

    const [obj, updateObj] = useState({
        a: 0,
        b: 0,
    })

    const testRef = useRef();
    // @ts-ignore
    testRef.current = obj;

    function handleClick1() {
        updateObj({
            a: obj.a + 1,
            b: obj.b
        })
        updateObj({
            a: obj.a,
            b: obj.b + 1
        })

        console.log('useCallback obj: ',obj);

        setTimeout(() => {
            console.log('testRef', testRef.current);
        }, 1000)
    }


    // @ts-ignore
    const handleClick = useCallback(() => {

        updateObj({
            a: obj.a + 1,
            b: obj.b
        })
        updateObj({
            a: obj.a,
            b: obj.b + 1
        })

        console.log('useCallback obj: ',obj);

        setTimeout(() => {
            console.log('testRef', testRef.current);
        }, 1000)

    }, [obj])

    return (
        <div onClick={handleClick1}>test</div>
    );
}

export default Index

