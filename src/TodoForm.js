import React from 'react';

const TodoForm = () => {
    return (
    <div>
        <form>
            <input placeholder='할 일을 입력하세요'/>
            <button type='submit'>등록</button>
        </form>
    </div>
    );   
};

export default TodoForm;