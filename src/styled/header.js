import styled from 'styled-components';

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(151, 151, 151, 0.2);
height: 80px;
overflow-y: auto;
top: 0;



.Title{
    color: white;
    font-family: 'Antonio', sans-serif;
    font-size: 28px;
    letter-spacing: -1.05px;
    font-weight: 400;
    padding-left: 32px;
}

/* Tablets (Portrait-Modus) */
@media (min-width: 577px) and (max-width: 810px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 160px;
}


`;
