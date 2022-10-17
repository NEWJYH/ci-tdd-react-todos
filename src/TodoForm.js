import React, { useCallback, useState } from 'react';

// props onInsert
const TodoForm = ({ onInsert }) => {
    
    const [value, setValue] = useState(''); 
    // 무한 루프에 빠질 위험이 큼 
    // useCallback 사용
    // useEffect 또는 callback을 사용
    const onChange = useCallback( e => {
        setValue(e.target.value);
        // console.log(value);
    },[]);
    // props로 받아온 함수를 처리 해줄것
    const onSubmit = useCallback( e => {
        onInsert(value);
        setValue("");
        e.preventDefault(); // 새로고침 방지
    }, [onInsert, value]);
    return (
    <div>
        <form onSubmit={onSubmit}>
            <input value={value} onChange={onChange} placeholder='할 일을 입력하세요'/>
            <button type='submit'>등록</button>
        </form>
    </div>
    );   
};

export default TodoForm;