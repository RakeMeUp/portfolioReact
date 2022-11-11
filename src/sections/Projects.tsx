import { useState } from "react";
import Card from "../components/Card";
import TagSearch from "../components/TagSearch";
import { StyledListWrapper } from "../styles/Projects.styles";

type Props = {};

const Projects = () => {
    const [cards, setCards] = useState([1, 2, 3, 4]);

    return (
        <>
            <StyledListWrapper>
                {cards.map((e) => (
                    <Card />
                ))}
            </StyledListWrapper>
            <TagSearch />
        </>
    );
};

export default Projects;
