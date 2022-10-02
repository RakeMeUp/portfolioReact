import { useState } from "react";
import Card from "../components/Card";
import {
    StyledCenteredContainer,
    StyledListWrapper,
} from "../styles/Projects.styles";

type Props = {};

const Projects = () => {
    const [cards, setCards] = useState([1, 2, 3, 4]);

    return (
        <StyledCenteredContainer>
            <StyledListWrapper>
                {cards.map((e) => (
                    <Card />
                ))}
            </StyledListWrapper>
        </StyledCenteredContainer>
    );
};

export default Projects;
