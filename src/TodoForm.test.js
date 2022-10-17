import React from 'react';
import { render } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', ()=> {
    it('has input and button', ()=> {
        const { getByText, getByPlaceholderText } = render(<TodoForm />);
        getByPlaceholderText('할 일을 입력하세요') ; // input이 있는지 확인
        getByText('등록'); // button이 있는지 확인
    });
});