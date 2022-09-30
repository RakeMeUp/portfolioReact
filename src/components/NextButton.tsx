import React, { useState } from "react";
import { useSectionContext } from "../contexts/sectionContext";
import { Ref } from "../interfaces/Ref";
import { StyledFloatingWrapper } from "../styles/NextButton.styles";

type Props = {
    scrollToNextSection: (ref: Ref) => void;
};

const NextButton = React.forwardRef(
    ({ scrollToNextSection }: Props, ref: any) => {
        const { currentSection, setCurrentSection } = useSectionContext();
        const [count, setCount] = useState(1);

        return (
            <StyledFloatingWrapper>
                <button onClick={() => scrollToNextSection(currentSection)}>
                    Projects
                </button>
            </StyledFloatingWrapper>
        );
    }
);

export default NextButton;
