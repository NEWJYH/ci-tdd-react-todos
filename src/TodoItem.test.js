import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
    // 테스트용으로 미리 정의해둔 샘플 오브젝트
    const sampleTodo = {
        id : 1,
        text : 'TDD 배우기',
        done : false,
    };
    // 기본적인 TodoItem을 render하는 기능
    // 자체적으로 데이터가 생성되는 것이 아니고
    // 어디서부터인가 받아와야 함
    // 호출하는 곳에서 받아온 데이터를 가지고
    // 초기화가 일어나는 작업이 필요
    const setup = (props = {}) => {
        const utils = render(<TodoItem todo={sampleTodo} {...props}/>);
        const {getByText} = utils;
        const todo = sampleTodo;
        const span = getByText(todo.text);
        const button = getByText('삭제');
        return {
            ...utils,
            span,
            button,
        };
    };
    // 기본적인 UI check
    it('has span and button', () => {
        const { span, button } = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });
    it("shows line-through on span when done is true", () => {
        const {span} = setup({todo : { ...sampleTodo, done: true } });
        expect(span).toHaveStyle('text-decoration: line-through;');
    });
    it("shows line-through on span when done is false", () => {
        const {span} = setup({todo : { ...sampleTodo, done: false } });
        expect(span).not.toHaveStyle('text-decoration: line-through;');
    });

});