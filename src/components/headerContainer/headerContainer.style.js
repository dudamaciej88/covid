import styled from "styled-components";
import { ReactComponent as CrownIco } from "../../assets/icons/crown.svg";

export const Container = styled.div`
  height: 100px;
  display: grid;
  margin: 3.8rem 0.6rem 0rem 0.6rem;
  border-radius: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  grid-template-columns: 5rem auto;
  grid-template-rows: 3.1rem 3.1rem;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const CrownWrapper = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  margin-top: 1.25rem;
  margin-left: 1rem;
  border-radius: 1.9rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Crown = styled(CrownIco)`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.625rem;
  fill: ${(props) => props.theme.colors.third};
`;

export const H1 = styled.h1`
  margin-left: 1rem;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: start;
  align-self: end;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.87rem;
`;

export const P = styled.p`
  margin-left: 1rem;
  margin-bottom: 1.25rem;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: start;
  align-self: end;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
`;
