import styled, { css, keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { opacity: 0}
 100% { opacity: 1; }
 `;

type Props = {
    phase: number;
    text: string;
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
        font-size: ${({ theme }) => theme.fontSize.xlarge};
        border: 2px solid ${({ theme }) => theme.dark.border};
        box-shadow: ${({ theme }) => theme.boxShadow.strong};
        border-radius: 50px;
        height: 80px;
        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
            width: 45px;
            height: 45px;
        }

        &:before {
            content: "";
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        ${({ phase, text }) => {
            switch (phase) {
                case 0:
                    return css`
                        width: 100px;
                        height: 100px;
                        border-radius: 150px;
                        & > img {
                            width: 60px;
                            height: 60px;
                        }
                    `;
                case 1:
                case 2:
                    return css`
                        width 250px;
                        & > span {
                            display: none;
                        }
                        &:before{
                            opacity:1;
                            content: ${text};
                        }


                    `;
                case 3:
                    return css`
                        width 300px;
                        & > span {
                            animation-name: ${breatheAnimation};
                            animation-duration: 1s;
                        }
                        &>img{
                            padding-left: 10px;
                        }
                    `;
            }
        }}
    }

    @media (max-height: 680px) {
        bottom: 15px;
    }
`;
