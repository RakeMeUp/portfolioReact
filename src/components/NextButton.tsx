import React from "react";
import { useSectionContext } from "../contexts/sectionContext";
import { Ref } from "../interfaces/Ref";
import { StyledFloatingWrapper } from "../styles/NextButton.styles";

type Props = {
    scrollToNextSection: (ref: Ref) => void;
};

const NextButton = React.forwardRef(
    ({ scrollToNextSection }: Props, ref: any) => {
        const { currentSection } = useSectionContext();
        const refs = [...ref];

        function getNextRef(refArr: Ref[]) {
            const index =
                (refArr.findIndex((e) => e === currentSection) + 1) % 3;
            return refs[index];
        }

        return (
            <StyledFloatingWrapper>
                <button
                    onClick={() => {
                        scrollToNextSection(getNextRef(refs));
                    }}
                >
                    Projects
                </button>
            </StyledFloatingWrapper>
        );
    }
);

export default NextButton;
