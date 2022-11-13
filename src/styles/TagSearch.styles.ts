import styled, { css } from "styled-components";

type ImgProps = {
    isOpen: boolean;
};

export const StyledSearchContainer = styled.div`
    box-shadow: ${({ theme }) => theme.boxShadow.strong};
    background-color: ${({ theme }) => theme.dark.inputBg};
    padding: 0 20px;
    left: 20px;
    right: 20px;
    bottom: 15vh;
    border-radius: 30px;
    position: absolute;
    border: 2px solid ${({ theme }) => theme.dark.border};
`;

export const StyledSearchBar = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    gap: 15px;
    /* &:after {
        position: absolute;
        top: -10px;
        content: "";
        height: 1px;
        left: 30px;
        right: 30px;
        background-color: ${({ theme }) => theme.dark.border};
    } */
`;

export const StyledDivider = styled.div`
    height: 75%;
    width: 2px;
    background-color: ${({ theme }) => theme.dark.lightText};
    border-radius: 10px;
`;

export const StyledTagContainer = styled.span`
    display: flex;
    overflow: scroll;
    flex-grow: 1;
    gap: 5px;
`;

export const StyledDrawer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 20px 0 100px 0;
`;

export const StyledImg = styled.img<ImgProps>`
    transform: rotate(0);
    transition: transform 0.5s;

    ${({ isOpen }) => {
        if (isOpen) {
            return css`
                transform: rotate(-180deg);
            `;
        }
    }}
`;
