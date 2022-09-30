import styled from "styled-components";

export const StyledListWrapper = styled.ul`
    display: flex;
    list-style-type: none;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    background-color: darkgray;
    gap: 30px;
    padding-bottom: 20px;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`;
