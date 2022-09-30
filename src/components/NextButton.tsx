import React from "react";
import { useSectionContext } from "../contexts/sectionContext";
import { Ref } from "../interfaces/Ref";
import { StyledFloatingWrapper } from "../styles/NextButton.styles";
import downArrow from "/downArrow.svg";
import upArrow from "/upArrow.svg";

type Props = {
    scrollToNextSection: (ref: Ref) => void;
};

const NextButton = React.forwardRef(
    ({ scrollToNextSection }: Props, ref: any) => {
        const { currentSection, currentSectionId } = useSectionContext();

        function getNextRef(refArr: Ref[]) {
            const index =
                (refArr.findIndex((e) => e === currentSection) + 1) % 4;
            return refArr[index];
        }

        const buttonStages = [
            { text: "", icon: downArrow },
            { text: "Project", icon: "" },
            { text: "Contacts", icon: "" },
            { text: "To The Top", icon: upArrow },
        ];

        return (
            <StyledFloatingWrapper>
                <button
                    onClick={() => {
                        scrollToNextSection(getNextRef(ref));
                    }}
                >
                    {buttonStages[currentSectionId].text &&
                        buttonStages[currentSectionId].text}
                    {buttonStages[currentSectionId].icon && (
                        <img src={buttonStages[currentSectionId].icon} />
                    )}
                </button>
            </StyledFloatingWrapper>
        );
    }
);

export default NextButton;
