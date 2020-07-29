import styled from 'styled-components'


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

export const CardsWrapper = styled.div`
display: flex;
padding: 0rem 0.625rem;
justify-content: space-between;
`

export const Line = styled.div`
height: 2.4375rem;
margin: 0rem 5.775rem;
border-left: 4px solid ${(props) => props.theme.colors.third};
border-right: 4px solid ${(props) => props.theme.colors.third};
@media (min-width: 768px) { 
    margin: 0rem 6.25rem;
 }

`

