import React from 'react';

const TodoItem = ({todo}) => {
    const {id, text, done} = todo;
    
    return (
        <li>
            <span>{text}</span>
            <button>삭제</button>
        </li>
    );
};


export default TodoItem;