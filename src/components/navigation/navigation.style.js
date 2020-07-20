import styled from 'styled-components'
import { ReactComponent as NumbersIco } from "../../assets/icons/list.svg"
import { ReactComponent as BarIco } from "../../assets/icons/bar-chart.svg"
import { ReactComponent as ClockIco } from "../../assets/icons/clock.svg"

export const Wrapper = styled.div`
position: fixed;
bottom: 0px;
width: 100%;
@media (min-width: 768px) {
    position: static;
}
`

export const Ul = styled.ul`
display: flex;
margin: 0 auto;
@media (min-width: 768px) {
    width: 60%;
    
}
`

export const Li = styled.li`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 2rem;
font-family: 'Montserrat';
font-weight: 400;
background-color: ${(props) => props.navActive ? "#3d5af1" : "#0e153a" };
color: white;
cursor: pointer;
border: 1px solid #faee1c;
border-radius: ${(props) => props.borderMobile};
padding: 0.3rem 1rem 0.3rem 1rem;
margin: ${(props) => props.margin};
@media (min-width: 768px) {
    border-radius: ${(props) => props.borderDesktop};
    height: 1.5rem;
}
`

export const Numbers = styled(NumbersIco)`
fill: #faee1c;
width: 1.5rem;
height: 1.5rem;

@media (min-width: 768px) {
    height: 1rem;
}
`

export const Bar = styled(BarIco)`
fill: #faee1c;
width: 1.5rem;
height: 1.5rem;

@media (min-width: 768px) {
    height: 1rem;
}
`

export const Clock = styled(ClockIco)`
fill: #faee1c;
width: 1.5rem;
height: 1.5rem;

@media (min-width: 768px) {
    height: 1rem;
}
`

export const Text = styled.p`
display: none;
@media (min-width: 768px) {
    display: inline;
    
}
`