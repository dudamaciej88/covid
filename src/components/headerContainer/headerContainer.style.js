import styled from "styled-components";
import { ReactComponent as CrownIco } from "../../assets/icons/crown.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4rem auto;
  grid-template-rows: 2rem 2rem;
  padding: 1rem;
  color: white;
`;

export const Crown = styled(CrownIco)`
  padding: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  fill: #faee1c;
`;

export const CrownWrapper = styled.div`
  background-color: #0e153a;
  width: 4rem;
  height: 4rem;
  border-radius: 2.5rem;
`;

export const H1 = styled.h1`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 2rem;
  align-self: start;
  margin: 0rem auto 0rem 1.5rem;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

export const P = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  align-self: end;
  margin: 0rem auto 0rem 1.5rem;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;
