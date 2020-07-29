import styled from "styled-components";
import { ReactComponent as NumbersIco } from "../../assets/icons/list.svg";
import { ReactComponent as BarIco } from "../../assets/icons/bar-chart.svg";
import { ReactComponent as ClockIco } from "../../assets/icons/clock.svg";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 1.25rem;
  left: 50%;
  margin-left: -10.625rem;
  width: 21.25rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  @media (min-width: 576px) {
    position: static;
    width: 14.0625rem;
    height: 4.37rem;
    margin: 0px auto;
  }
  @media (min-width: 768px) {
    width: 19.875rem;
    height: 5.3125rem;
  }
`;

export const Ul = styled.ul`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  margin: 0 auto;
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  @media (min-width: 576px) {
    border: 0px;
  }
  @media (min-width: 768px) {
    height: 5.3125rem;
  }
`;

export const Li = styled.li`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-family: "Montserrat";
  font-weight: 400;
  background-color: ${(props) =>
    props.navActive
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  color: white;
  cursor: pointer;
  padding: 0.3rem 1rem 0.3rem 1rem;
  margin: ${(props) => props.margin};
  @media (min-width: 576px) {
    height: 4.37rem;
    padding: 0 0;
  }
  @media (min-width: 768px) {
    height: 5.3125rem;
  }
`;

export const Numbers = styled(NumbersIco)`
  fill: ${(props) => props.theme.colors.third};
  width: 1.5rem;
  height: 1.5rem;
  @media (min-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
`;

export const Bar = styled(BarIco)`
  fill: ${(props) => props.theme.colors.third};
  width: 1.5rem;
  height: 1.5rem;
  @media (min-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
`;

export const Clock = styled(ClockIco)`
  fill: ${(props) => props.theme.colors.third};
  width: 1.5rem;
  height: 1.5rem;
  @media (min-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
`;

export const Text = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: none;
  }
`;
