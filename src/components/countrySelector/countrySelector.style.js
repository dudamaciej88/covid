import styled from "styled-components";

export const Wrapper = styled.div`
  width: 10.3rem;
  height: 4.37rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.secondary};
  @media (min-width: 768px) { 
    width: 12.5rem;
    height: 5.3125rem;
   }

`;

export const Label = styled.div`
  padding: 0.7rem 1rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: normal;
  @media (min-width: 768px) {
    padding: 0.75rem 1.1875rem;
   }
`;

export const Select = styled.select`
  width: 8.375rem;
  height: 1.625rem;
  margin-left: 0.7rem;
  padding: 0rem 1rem;
  appearance: none;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textColor};
  cursor: pointer;
  font-size: 1rem;
  border: 2px solid ${(props) => props.theme.colors.third};
  border-radius: 1rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  @media (min-width: 768px) { 
    width: 10.0625rem;
    height: 2rem;
    padding: 0rem 1.5rem;
    margin-left: 1rem;
   }
`;
