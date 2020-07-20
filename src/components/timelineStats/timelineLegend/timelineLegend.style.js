import styled from "styled-components";


export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1.4rem 1.4rem 1.4rem 1.4rem;
  padding: 1rem;
  color: white;
  max-width: 400px;
  margin: 0px auto;
`;

export const P1 = styled.p`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 0.8rem;
`;

export const P2 = styled.p`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 0.8rem;
`;

export const Grid1 = styled.div`
grid-column: 1 / 2;
grid-row: 2 / 3;
align-self: center;

` 

export const Grid2 = styled.div`
grid-column: 1 / 2;
grid-row: 3 / 4;
align-self: center;

` 

export const Grid3 = styled.div`
grid-column: 1 / 2;
grid-row: 4 / 5;
align-self: center;

` 
export const Color1Div = styled.div`
width: 4rem;
height: 1rem;
align-self: center;
border-radius: 1rem;
justify-self: center;
background-color: #faee1c;
grid-column: 2 / 3;
grid-row: 2 / 3;
`

export const Color2Div = styled.div`
width: 4rem;
height: 1rem;
align-self: center;
border-radius: 1rem;
justify-self: center;
background-color: #0e153a;
grid-column: 3 / 4;
grid-row: 2 / 3;
`

export const Color3Div = styled.div`
width: 4rem;
height: 1rem;
align-self: center;
border-radius: 1rem;
justify-self: center;
background-color: green;
grid-column: 2 / 3;
grid-row: 3 / 4;
`

export const Color4Div = styled.div`
width: 4rem;
height: 1rem;
align-self: center;
border-radius: 1rem;
justify-self: center;
background-color: purple;
grid-column: 3 / 4;
grid-row: 3 / 4;
`

export const Color5Div = styled.div`
width: 4rem;
height: 1rem;
align-self: center;
border-radius: 1rem;
justify-self: center;
background-color: orange;
grid-column: 2 / 3;
grid-row: 4 / 5;
`

export const Color6Div = styled.div`
width: 4rem;
height: 1rem;
align-self: center;
border-radius: 1rem;
justify-self: center;
background-color: white;
grid-column: 3 / 4;
grid-row: 4 / 5;
`