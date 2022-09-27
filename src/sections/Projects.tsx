import { forwardRef, useState } from "react";
import Card from "../components/Card";
import Section from "../components/Section";
import { StyledListWrapper } from "./Projects.styles";

type Props = {};

const Projects = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const [cards, setCards] = useState([1, 2, 3, 4]);

    return (
        <Section ref={ref}>
            Projects
            <StyledListWrapper>
                {cards.map((e) => (
                    <Card />
                ))}
            </StyledListWrapper>
        </Section>
    );
});

export default Projects;
