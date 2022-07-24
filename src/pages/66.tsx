import React, {useState, useEffect} from "react";
function Child() {
    console.log('Child');
    return <div>Child</div>;
}


function Father(props:any) {
    const [num, setNum] = React.useState(0);
    return (
        <div onClick={() => {setNum(num + 1)}}>
            {num}
            {props.children}
        </div>
    );
}


function App() {
    return (
        <Father>
            <Child/>
        </Father>
    );
}

export default App;
