import styled, { css } from "styled-components";

type Props = {
    isActive: boolean;
};

export const StyledLi = styled.li<Props>`
    width: fit-content;
    align-self: flex-end;
    list-style: none;
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    padding-bottom: 5px;
    position: relative;
    cursor: pointer;

    &:after {
        content: "";
        height: 4px;
        background-color: ${({ theme }) => theme.dark.primary};
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        border-radius: 100px;
        transition: width 300ms ease-in-out;
    }
    &:hover:after {
        width: 100%;
    }

    ${({ isActive }) => {
        if (isActive) {
            return css`
                &:after {
                    background-color: ${({ theme }) => theme.dark.primary};
                    width: 100%;
                }
            `;
        }
    }}

    @media (max-width: 370px) {
        font-size: ${({ theme }) => theme.fontSize.large};
    }
`;
