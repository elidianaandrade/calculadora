import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #757F9A;
    background: -webkit-linear-gradient(to right, #D7DDE8, #757F9A);
    background: linear-gradient(to right, #D7DDE8, #757F9A);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #EEEEF0;
    padding: 1rem;
    width: 50%;
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