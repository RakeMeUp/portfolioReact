import styled from "styled-components";

export const StyledListWrapper = styled.ul`
    display: flex;
    list-style-type: none;
    max-width: 100vw;
    margin: 0;
    outline: 2px solid blue;
    padding: 0;
    gap: 30px;
    padding-bottom: 20px;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledCenteredContainer = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
