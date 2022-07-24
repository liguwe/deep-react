/*************************************************
 * // ::::列表重复渲染
 *
 * Render: App
 * Render: List
 * Render: ListItem
 * Render: ListItem
 * // 注释：
 ************************************************/
import React from 'react';

function uuidv4(){
    return Math.random() + '' + new Date().valueOf();
}

const App = () => {
    console.log('Render: App');
    const [users, setUsers] = React.useState([
        { id: 'a', name: 'Robin' },
        { id: 'b', name: 'Dennis' },
    ]);

    const [text, setText] = React.useState('');

    const handleText = (event) => {
        // ::::每次更新时，也会重新执行列表
        // ::::组件List、ListItem都会吹醒
        setText(event.target.value);
    };

    const handleAddUser = ()  =>{
        setUsers(users.concat({ id: uuidv4(), name: text }));
    };

    const handleRemove = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleText} />
            <button type="button" onClick={handleAddUser}>
                Add User
            </button>

            <List list={users} onRemove={handleRemove} />
        </div>
    );
};

const List = ({ list, onRemove }) => {
    console.log('Render: List');
    return (
        <ul>
            {list.map((item) => (
                <ListItem key={item.id} item={item} onRemove={onRemove} />
            ))}
        </ul>
    );
};

const ListItem = ({ item, onRemove }) => {
    console.log('Render: ListItem');
    return (
        <li>
            {item.name}
            <button type="button" onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </li>
    );
};

export default App;
