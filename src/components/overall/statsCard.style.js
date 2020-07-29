import styled from "styled-components";

export const Wrapper = styled.div`
  width: 10.3rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.secondary};
  @media (min-width: 576px) { 
    width: 17.25rem;
   }
  @media (min-width: 768px) { 
    width: 22rem;
   }

`;

export const StatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Pdesc = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textColor};
`;

export const PNumber = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.third};
`;
