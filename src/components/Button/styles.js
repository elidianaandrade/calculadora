import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 1.5rem;
    margin: .25rem;

    background: transparent;

    border-radius: .45rem;
    border: 0.1rem solid var(--gray-100);
    box-shadow: inset -.8px -.8px 2.5px .8px rgb(0 0 0 / 11%);
        
    font: 'Arial', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--gray-500);
    flex: 1;
    
    &:hover {
        border: 0.1rem solid transparent;
        box-shadow: inset .01rem .02rem .15rem .1rem var(--gray-200);
    }
`