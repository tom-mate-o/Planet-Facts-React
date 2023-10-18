import styled from 'styled-components';

export const Navbar = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  padding-right: 42px;
  padding-top: 0px;
  font-family: 'League Spartan', sans-serif;
  font-size: 11px;
  letter-spacing: 1px;
  

  li {
    margin: 0; 
    padding: 0;

  }

  a {
    color: white;
    text-decoration: none;
    padding: 8px 16px; 
    &:hover {
      text-decoration: underline;
    }


`;
