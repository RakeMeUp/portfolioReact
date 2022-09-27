import { forwardRef, ReactNode, useEffect } from "react";
import { useSectionContext } from "../App";
import { useIsInViewport } from "../hooks/useIsInViewport";
import { StyledSection } from "./Section.styles";

type Props = {
    children: ReactNode;
};

const Section = forwardRef<HTMLDivElement, Props>(
    ({ children }: Props, ref) => {
        const { setNextSection, setSectionToRef } = useSectionContext();
        const isInView = useIsInViewport(ref);

        useEffect(() => {
            if (isInView) {
                console.log("inciew");
                setSectionToRef(ref);
            }
        }, [isInView]);

        return <StyledSection ref={ref}>{children}</StyledSection>;
    }
);

export default Section;
