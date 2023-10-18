import styled from 'styled-components';

export const Planetimage = styled.div`

width: 100%;
img {
    width: auto;
    height: auto;
}

.GeologyCollage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Pin{
    position: absolute;
    width: 200px;
    height: auto;
    z-index: 10;

}

  

.Planet{
    width: 100%;
    height: auto;
    z-index: 0;

}

/* Tablets (Portrait-Modus) */
@media (min-width: 577px) and (max-width: 810px) {
    padding-bottom: 48px;
    img{
    max-width: 80vw;


    &.Pin{
    width: 150px;

    }

  }

  /* Smartphones (Portrait-Modus) */
@media (max-width: 500px) {
    padding-bottom: 48px;
    img{
    width: 50vw;


    &.Pin{
    width: 150px;

    }

  }


`;
