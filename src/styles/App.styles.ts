import styled from "styled-components";

export const StyledMain = styled.main`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.dark.bg};
    color: ${({ theme }) => theme.dark.lightText};
`;

export const StyledHeader = styled.header`
    padding: 20px;

    & > h1,
    h2 {
        margin: 0;
    }
    & > h1 {
        font-size: ${({ theme }) => theme.fontSize.xlarge};
    }
    & > h2 {
        font-size: ${({ theme }) => theme.fontSize.small};
        font-style: italic;
    }
`;
