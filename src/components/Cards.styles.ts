import styled from "styled-components";

export const StyledCard = styled.li`
    height: 430px;
    width: 300px;
    flex-shrink: 0;
    background-color: aqua;
    border-radius: 15px;
    box-shadow: 0px 10px 10px 0px #000000bf;
    scroll-snap-align: center;
    &:first-of-type {
        margin-left: 20px;
    }
    &:last-of-type {
        margin-right: 20px;
    }
`;
