import styled from "styled-components";

export const Card = styled.div`
    width: 400px;
    min-height: 350px;
    padding:15px;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

export const Container = styled.div`
    display: ${(props) => props.display};
`;

export const Button = styled.button`
    background-color: lightblue;
    border:none;
    align-self:center;
`

