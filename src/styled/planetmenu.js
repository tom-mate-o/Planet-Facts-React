import styled from 'styled-components';

export const Planetmenu  = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 16px;
margin-top: 39px;

/* Tablets (Portrait-Modus) */
@media (min-width: 577px) and (max-width: 810px) {
    justify-content: center;
  }

  /* Tablets (Portrait-Modus) */
@media (max-width: 500px) {
    flex-direction: row;
    justify-content: center;
}


`;
