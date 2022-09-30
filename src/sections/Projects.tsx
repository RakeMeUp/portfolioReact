import { useState } from "react";
import Card from "../components/Card";
import {
    StyledCenteredContainer,
    StyledListWrapper,
} from "../styles/Projects.styles";
import { StyledHeader } from "../styles/shared.styles";

type Props = {};

const Projects = () => {
    const [cards, setCards] = useState([1, 2, 3, 4]);

    return (
        <>
            <StyledHeader>
                <h1>Projects</h1>
                <h2>I have been working on</h2>
            </StyledHeader>
            <StyledCenteredContainer>
                <StyledListWrapper>
                    {cards.map((e) => (
                        <Card />
                    ))}
                </StyledListWrapper>
            </StyledCenteredContainer>
        </>
    );
};

export default Projects;
