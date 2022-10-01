import React, { useRef, useEffect, useState } from "react";
import { useSectionContext } from "../contexts/sectionContext";
import { Ref } from "../interfaces/Ref";
import { StyledFloatingWrapper } from "../styles/NextButton.styles";
import AnimatedText from "./AnimatedText";
import downArrow from "/downArrow.svg";
import upArrow from "/upArrow.svg";

type Props = {
    scrollToNextSection: (ref: Ref) => void;
};

const buttonStages = [
    { text: "", icon: downArrow, phase: 0 },
    { text: "Projects", icon: downArrow, phase: 1 },
    { text: "Contacts", icon: downArrow, phase: 2 },
    { text: "To The Top", icon: upArrow, phase: 3 },
];

const NextButton = React.forwardRef(
    ({ scrollToNextSection }: Props, ref: any) => {
        const { currentSection, currentSectionId } = useSectionContext();

        function getNextRef(refArr: Ref[]) {
            const index =
                (refArr.findIndex((e) => e === currentSection) + 1) % 4;
            return refArr[index];
        }

        const [phase, setPhase] = useState(0);
        const [text, setText] = useState("");

        useEffect(() => {
            setPhase(0);
            setText("");
            setTimeout(() => {
                setPhase(buttonStages[currentSectionId].phase);
                setText(buttonStages[currentSectionId].text);
            }, 100);
        }, [currentSectionId]);

        return (
            <StyledFloatingWrapper phase={phase} text={text}>
                <button
                    onClick={() => {
                        scrollToNextSection(getNextRef(ref));
                    }}
                >
                    <span></span>
                    {buttonStages[currentSectionId].icon && (
                        <img src={buttonStages[currentSectionId].icon} />
                    )}
                </button>
            </StyledFloatingWrapper>
        );
    }
);

export default NextButton;
