import styled from 'styled-components';

export const Contentbox = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 80%;
height: 80vh;
margin: 0 auto;

/* Tablets (Portrait-Modus) */
@media (min-width: 577px) and (max-width: 810px) {
    width: 90%;
  }

`;
