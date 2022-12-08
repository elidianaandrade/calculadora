import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 100%;

    background: #313131;  
    border: 1rem solid #313131; 
    border-radius: .8rem;
    box-shadow: .01rem .07rem .2rem .001rem #3E4144;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 1.25rem;
    font-family: 'Inter';
    
    input {
        width: 100%;
        height: 6rem;
        background-color: #B0B8BA;
        border: 0;
        border-radius: .4rem;
        box-shadow: inset .01rem .07rem .2rem .001rem #3E4144;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Inter';
        color: #FFFFFF;
    }
`