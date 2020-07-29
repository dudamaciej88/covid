import styled from 'styled-components';

export const App = styled.div`
background-color: ${(props) => props.theme.colors.primary};
min-height: 100vh;
max-width: 1200px;
margin: 0px auto;
`

export const SelectorsWrapper = styled.div`
display: flex;
padding: 2.4rem 0.625rem 0rem 0.625rem;
justify-content: space-between;
`