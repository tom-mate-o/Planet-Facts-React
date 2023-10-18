import styled from 'styled-components';

export const Planettext = styled.div`

color: white;
font-family: 'League Spartan', sans-serif;
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 25px;
    font-weight: 400;
    margin-top: 23px;

       .Wiki{
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        align-items: center;
        gap: 5px;
        padding-top: 24px;

        img{
        width: 12px;
        height: 12px;
        }

       
       }

.SourceLink{
   opacity: 0.5;

   a{
    color: white;
   }
}

/* Tablets (Portrait-Modus) */
@media (min-width: 577px) and (max-width: 810px) {
    font-size: 11px;
    margin-top: 24px;
  }

`;
