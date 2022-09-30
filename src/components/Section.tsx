import { forwardRef, ReactNode, useEffect, useState } from "react";
import { useSectionContext } from "../contexts/sectionContext";
import { useIsInViewport } from "../hooks/useIsInViewport";
import { StyledSection } from "../styles/Section.styles";

type Props = {
    children: ReactNode;
};

/* 

true,false => UP
false,true => DOWN

*/

const Section = forwardRef<HTMLDivElement, Props>(
    ({ children }: Props, ref) => {
        const {
            currentSection,
            stepToNextSection,
            prevSection,
            getCurrentSectionId,
        } = useSectionContext();
        const isInView = useIsInViewport(ref);

        useEffect(() => {
            if (isInView) {
                stepToNextSection();
            }
        }, [isInView]);

        return <StyledSection ref={ref}>{children}</StyledSection>;
    }
);

export default Section;
