import { forwardRef, useState } from "react";
import Card from "../components/Card";
import Section from "../components/Section";
import {
    StyledCenteredContainer,
    StyledListWrapper,
} from "../styles/Projects.styles";
import { StyledHeader } from "../styles/shared.styles";

type Props = {};

const Projects = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const [cards, setCards] = useState([1, 2, 3, 4]);

    return (
        <Section ref={ref}>
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
        </Section>
    );
});

export default Projects;
