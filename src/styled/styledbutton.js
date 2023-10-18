import styled from 'styled-components';

export const Styledbutton = styled.div`

height: 48px;
color: white;
background-color: #070724;
border: 1px solid rgba(151, 151, 151, 0.2);
font-family: 'Spartan', sans-serif;
font-size: 12px;
font-weight: 800;
letter-spacing: 2.57px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
padding-left: 28px;
gap: 28px;

&:hover{
    background-color: #38384F;
    cursor: pointer;
}


&.active{
    background-color: ${props => `#${props.bgColor}`};
}


p{
    opacity: 0.5;
}

/* Tablets (Portrait-Modus) */
@media (min-width: 577px) and (max-width: 810px) {
    height: 40px;
    width: 281px;
    font-size: 9px;
    letter-spacing: 1.93px;
  }


`;
