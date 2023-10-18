import styled from 'styled-components';

export const Planetinfobox = styled.div`
display: grid;
grid-template-columns: 65% 35%;
grid-template-rows: auto 200px auto;
color: white;
margin-top: 50px;


.PlanetImage {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
}

.PlanetName {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
}

.PlanetInfo {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

.PlanetMenu {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
}

.Stats {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
}

/* Tablets (Portrait-Modus) */
@media (min-width: 577px) and (max-width: 810px) {

    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto auto;

    .PlanetImage {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .PlanetName {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        padding-right: 68px;
    }
    
    .PlanetInfo {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        padding-right: 68px;
    }
    
    .PlanetMenu {
        grid-column: 2 / 3;
        grid-row: 2 / 4;
    }
    
    .Stats {
        grid-column: 1 / 3;
        grid-row: 4 / 5;
        padding-bottom: 35px;
    }

  }

`;
