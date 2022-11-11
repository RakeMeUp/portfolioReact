import styled, { css } from "styled-components";

type Props = {
    phase: number;
};

export const StyledFloatingWrapper = styled.div<Props>`
    position: fixed;
    bottom: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;
    user-select: none;
    & > button {
        cursor: pointer;
        background: ${({ theme }) => theme.dark.buttonBg};
        font-size: ${({ theme }) => theme.fontSize.xlarge};
        border: 2px solid ${({ theme }) => theme.dark.border};
        box-shadow: ${({ theme }) => theme.boxShadow.strong};
        border-radius: 50px;
        height: 70px;
        transition: width 300ms cubic-bezier(0.23, -1.07, 0.42, 2.29), height 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 270px;

        & > img {
            width: 45px;
            height: 45px;
            padding-left: 10px;
            transform: rotate(0deg);
            transition: transform 400ms ease-out;
        }

        .fade-enter {
            opacity: 0;
            transform: scale(50%);
        }

        .fade-enter-active {
            opacity: 1;
            transform: scale(100%);

            transition: opacity 200ms cubic-bezier(0.13, -1.49, 1, 1.95),
                transform 200ms cubic-bezier(0.13, -1.49, 1, 1.95);
        }

        .fade-exit {
            opacity: 1;
            transform: scale(100%);
        }

        .fade-exit-active {
            opacity: 0;
            transform: scale(50%);
            transition: opacity 200ms cubic-bezier(0.13, -1.49, 1, 1.95),
                transform 200ms cubic-bezier(0.13, -1.49, 1, 1.95);
        }

        ${({ phase }) => {
            if (phase == 0) {
                return css`
                    width: 100px;
                    height: 100px;
                    border-radius: 150px;
                    & > img {
                        width: 60px;
                        height: 60px;
                        padding: 0;
                    }
                `;
            }
            if (phase == 4) {
                return css`
                    & > img {
                        padding-right: 10px;
                        transform: rotate(180deg);
                    }
                `;
            }
            if (phase % 2 == 1) {
                return css`
                    width: 230px;
                `;
            }
        }}
    }

    @media (max-height: 680px) {
        bottom: 15px;
    }
`;
