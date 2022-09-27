import styled from "styled-components";
import { useSectionContext } from "../App";

const StyledFloatingWrapper = styled.div`
    position: fixed;
    right: 0;
`;

type Props = {
    section: React.RefObject<HTMLDivElement>;
};

function NextButton({ section }: Props) {
    const { setNextSection, setSectionToIndex } = useSectionContext();

    function scrollToNextSection(section: React.RefObject<HTMLDivElement>) {
        section.current?.scrollIntoView();
    }

    return (
        <StyledFloatingWrapper>
            <button onClick={() => scrollToNextSection(section)}>{}</button>
        </StyledFloatingWrapper>
    );
}

export default NextButton;
