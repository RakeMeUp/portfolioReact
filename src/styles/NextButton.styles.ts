import styled, { css, keyframes } from "styled-components";

type Props = {
    phase: number;
};

export const StyledFloatingWrapper = styled.div<Props>`
    position: fixed;
    bottom: 35px;
    outline: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;
    & > button {
        background: ${({ theme }) => theme.dark.buttonBg};
        font-size: ${({ theme }) => theme.fontSize.large};
        border: 2px solid ${({ theme }) => theme.dark.border};
        box-shadow: ${({ theme }) => theme.boxShadow.strong};
        border-radius: 50px;
        height: 70px;
        transition: width 300ms cubic-bezier(0.23, -1.07, 0.42, 2.29),
            height 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;

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
            switch (phase) {
                case 0:
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
                case 1:
                case 2:
                    return css`
                        width 220px;
                    `;
                case 3:
                    return css`
                        width 270px;
                        &>img{
                            padding-right: 10px;
                            transform: rotate(180deg);

                        }

                    `;
            }
        }}
    }

    @media (max-height: 680px) {
        bottom: 15px;
    }
`;
