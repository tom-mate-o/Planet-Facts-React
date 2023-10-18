import styled from 'styled-components';

export const Statbox = styled.div`
color: white;
width: 20%;
border: 1px solid rgba(151, 151, 151, 0.2);
padding-left: 20px;
padding-top: 2px;
padding-bottom: 2px;
height: 128px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 24px;

h3{
    font-family: 'League Spartan', sans-serif;
    font-size: 15px;
    letter-spacing: 1px;
    opacity: 0.5;
}

h1{
    font-family: 'Antonio', sans-serif;
    font-size: 28px;
    letter-spacing: -1.05px;
    font-weight: 400;

}

/* Tablets (Portrait-Modus) */
@media (min-width: 577px) and (max-width: 810px) {

    height: 88px;
    gap: 4px;
    h3{
        font-size: 10px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0.73px;
        opacity: 0.5;
    }
    
    h1{
        font-size: 24px;
        letter-spacing: -0.9px;
        font-weight: 400;
    
    }
  }




`;
