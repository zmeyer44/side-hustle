import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.43rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainDark)" : "var(--lightBlue)"};
color: ${prop => (prop.cart ? "var(--mainDark)" : "var(--lightBlue)")};
border-radius: 0.5rem;
padding: .2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition:all .5s ease-in-out;
&:hover{
    background:${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus{
    outline: none;
}
`;
export const ButtonContainerInsta = styled.button`
text-transform:capitalize;
font-size:1.43rem;
background: transparent;
border: 0.15rem solid var(--lightBlue);
border-color: #515BD4;
color: #DD2A7B;
border-radius: 0.5rem;
padding: .2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition:all .5s ease-in-out;
&:hover{
    background:#DD2A7B;
    color: #FFF;
}
&:focus{
    outline: none;
}
`;