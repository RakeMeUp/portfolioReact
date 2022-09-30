import styled from "styled-components";

export const StyledFloatingWrapper = styled.div`
    position: fixed;
    bottom: 35px;
    outline: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;
    & > button {
        background: ${({ theme }) => theme.dark.buttonBg};
        outline: 1px solid green;
        font-size: ${({ theme }) => theme.fontSize.xlarge};
        padding: 0.5em 2em;
        border: 2px solid ${({ theme }) => theme.dark.border};
        box-shadow: ${({ theme }) => theme.boxShadow.strong};
        border-radius: 50px;
    }

    @media (max-height: 680px) {
        bottom: 15px;
    }
`;
