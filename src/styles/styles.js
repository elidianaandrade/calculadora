import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: #0A0A0A;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    padding: 1rem;
    
    background: #E7E7E7;
    background: -webkit-linear-gradient(to right, #eef2f3, #E7E7E7);
    background: linear-gradient(to right, #eef2f3, #E7E7E7);
    
    border-radius: .8rem;
    border: 0.1rem outset var(--gray-100);
    box-shadow: .188rem .25rem .313rem .25rem #5454542B;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`