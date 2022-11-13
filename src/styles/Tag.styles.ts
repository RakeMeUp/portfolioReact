import styled, { css } from "styled-components";
type Props = {
    size?: "sm";
    selected?: boolean;
};

export const StyledTag = styled.button<Props>`
    background-color: ${({ theme }) => theme.dark.secondary};
    padding: 0.5em;
    color: ${({ theme }) => theme.dark.lightText};
    font-size: ${({ theme }) => theme.fontSize.small};
    border-radius: 15px;
    border: 1px white solid;

    ${({ size }) => {
        if (size !== "sm") {
            return css`
                font-size: ${({ theme }) => theme.fontSize.medium};
            `;
        }
    }}
    ${({ selected }) => {
        if (selected) {
            return css`
                color: black;
                background-color: white;
                border-color: black;
                box-shadow: ${({ theme }) => theme.boxShadow.weak};
            `;
        }
    }}
`;
