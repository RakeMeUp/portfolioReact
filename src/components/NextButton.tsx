import React, { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useSectionContext } from "../contexts/sectionContext";
import { sectionData } from "../data";
import { Ref } from "../interfaces/Ref";
import { StyledFloatingWrapper } from "../styles/NextButton.styles";
import downArrow from "/downArrow.svg";

type Props = {
    scrollToNextSection: (ref: Ref) => void;
};

const NextButton = React.forwardRef(
    ({ scrollToNextSection }: Props, ref: any) => {
        const { currentSection, currentSectionIndex } = useSectionContext();

        function getNextRef(refArr: Ref[]) {
            const index =
                (refArr.findIndex((e) => e === currentSection) + 1) %
                sectionData.length;
            return refArr[index];
        }

        const [phase, setPhase] = useState(0);
        const [text, setText] = useState("");

        useEffect(() => {
            setText(sectionData[currentSectionIndex].nextButtonText);
            setPhase(currentSectionIndex);
        }, [currentSectionIndex]);

        return (
            <StyledFloatingWrapper phase={phase}>
                <button
                    onClick={() => {
                        scrollToNextSection(getNextRef(ref));
                    }}
                >
                    <SwitchTransition>
                        <CSSTransition
                            classNames="fade"
                            addEndListener={(node, done) => {
                                node.addEventListener(
                                    "transitionend",
                                    done,
                                    false
                                );
                            }}
                            key={phase}
                        >
                            <span key={text}>{text}</span>
                        </CSSTransition>
                    </SwitchTransition>
                    <SwitchTransition>
                        <CSSTransition
                            classNames="fade"
                            addEndListener={(node, done) => {
                                node.addEventListener(
                                    "transitionend",
                                    done,
                                    false
                                );
                            }}
                            key={phase}
                        >
                            <img key={"img"} src={downArrow} />
                        </CSSTransition>
                    </SwitchTransition>
                </button>
            </StyledFloatingWrapper>
        );
    }
);

export default NextButton;
