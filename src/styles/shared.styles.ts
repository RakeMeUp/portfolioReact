import styled from "styled-components";

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
        font-size: ${({ theme }) => theme.fontSize.medium};
        font-style: italic;
    }
`;
