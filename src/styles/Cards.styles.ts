import styled from "styled-components";

export const StyledCard = styled.li`
    height: 430px;
    width: 300px;
    flex-shrink: 0;
    position: relative;
    background-color: ${({ theme }) => theme.dark.cardBg};
    border-radius: 15px;
    border: 2px solid ${({ theme }) => theme.dark.border};
    box-shadow: ${({ theme }) => theme.boxShadow.strong};
    scroll-snap-align: center;

    & > * {
        margin: 0 20px;
    }

    &:first-of-type {
        margin-left: 20px;
    }
    &:last-of-type {
        margin-right: 20px;
    }

    & > h3 {
        font-size: ${({ theme }) => theme.fontSize.large};
        text-align: center;
        margin-top: 15px;
    }
`;

export const StyledCardImageContainer = styled.div`
    margin: 20px auto 0 auto;
    border-radius: 15px;
    width: 260px;
    height: 200px;
    box-shadow: ${({ theme }) => theme.boxShadow.weak};
    background-color: ${({ theme }) => theme.dark.skeletonBg};
`;

export const StyledTagScroller = styled.div`
    position: absolute;
    display: flex;
    bottom: 15px;
    right: 0;
    left: 0;
    height: 45px;
`;
