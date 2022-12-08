import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 22rem;
    height: 100%;
    margin: 2rem .2rem;
    padding: .8rem;

    background: transparent;  
    border-radius: .6rem;
    box-shadow: inset .01rem .07rem .2rem .001rem var(--gray-100);

    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    input {
        width: 100%;
        height: 4.5rem;
        padding: .7rem;

        background-color: #B0B8BA;
        border: 0;
        border-radius: .4rem;
        box-shadow: inset .01rem .07rem .2rem .001rem var(--gray-500);

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        font-family: 'Kdam Thmor Pro', sans-serif;
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--gray-400);
    }

    input:focus {
        box-shadow: inset .01rem .07rem .2rem .001rem var(--gray-500);
        outline: 0;
    }
`