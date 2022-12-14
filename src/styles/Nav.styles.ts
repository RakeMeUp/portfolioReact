import styled, { css } from "styled-components";

type navContainerProps = {
    expanded: boolean;
};

export const StyledNavContainer = styled.div<navContainerProps>`
    position: fixed;
    top: 0;
    right: -250px;
    z-index: 10;
    display: flex;
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;

    ${({ expanded }) =>
        expanded &&
        css`
            transform: translateX(-250px);
        `}

    @media (max-width: 370px) {
        right: -210px;
        transform: translateX(-210px);
        ${({ expanded }) =>
            !expanded &&
            css`
                transform: translateX(0);
            `}
    }
`;

export const StyledNavButton = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.dark.menuBg};
    border-radius: 0 0 0 30px;
    border-width: 0 0 2px 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.dark.border};
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;

    & > img {
        height: 40px;
        width: 40px;
    }
`;

export const StyledNavMenu = styled.ul`
    background-color: ${({ theme }) => theme.dark.menuBg};
    user-select: none;
    padding: 20px;
    margin: 0;
    border-radius: 0 0 0 30px;
    border-width: 0 0 2px 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.dark.border};
    display: flex;
    flex-direction: column;
`;
