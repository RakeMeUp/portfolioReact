import styled from "styled-components";

export const StyledMain = styled.main`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.dark.bg};
    color: ${({ theme }) => theme.dark.lightText};
`;
