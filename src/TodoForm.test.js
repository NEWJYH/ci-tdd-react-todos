import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', ()=> {
    // 여러 작업을 동시에 할수 있도록 공통 function을 하나 만듬
    // 없이도 호출하고 있어도 호출할수 있도록 ...props로 생성
    // setup을 통해서 작업을 할수 있게끔 만들어주면 됨 
    // 내용이 어려울 경우 그대로 둬도 됨
    const setup = (props = {}) => {
        const utils = render(<TodoForm {... props} />);
        const { getByText, getByPlaceholderText } = utils;
        const input = getByPlaceholderText('할 일을 입력하세요'); // input이 있는지 확인
        const button = geByText('등록'); // button 이 있는지 확인
        return {
            ...utils,
            input,
            button,
        };
    };

    it('has input and button', ()=> {
        // const { getByText, getByPlaceholderText } = render(<TodoForm />);
        // getByPlaceholderText('할 일을 입력하세요') ; // input이 있는지 확인
        // getByText('등록'); // button이 있는지 확인
        const {input, button} = setup();
        // 있는지 확인
        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
    });
    // 입력 클릭 확인 코드 
    it('changes input', ()=> {
        // const { getByPlaceholderText } = render(<TodoForm />);
        // const input = getByPlaceholderText('할 일을 입력하세요');
        // fireEvent.change(input, {
        //     target : {
        //         value: 'TDD 배우기',
        //     },
        // });
        // expect(input).toHaveAttribute('value','TDD 배우기');
        const {input} = setup();
        fireEvent.change(input, {
            target : {
                value: 'TDD 배우기',
            },
        });
        expect(input).toHaveAttribute('value','TDD 배우기');
    });
    it('calls onInsert and clear input', ()=> {
        // props 목 object 흉내내는 애들 
        // 비지니스 로직을 테스트 코드로 짤때는 수시로 필요하게 됨
        // 익숙해지고 그럴때 일이고 함수 호출 하는 것을 흉내내주는 애  
        // 함수를 흉내 내줌 
        const onInsert = jest.fn();
        // const {getByText, getByPlaceholderText} = render(<TodoForm onInsert={onInsert} />);
        // const input = getByPlaceholderText('할 일을 입력하세요');
        // const button = getByText('등록');
        // change 이벤트 발생 시키기
        
        const {input, button} = setup({ onInsert});
        // Change 이벤트 발생시키기        
        fireEvent.change(input, {
            target : {
                value : 'TDD 배우기',
            },
        });
        // 버튼 클릭시키기
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기'); // onInsert가 'TDD 배우기' 파라미터가 호출
        expect(input).toHaveAttribute('value', ''); // input이 비워졌는지 확인
    });

});