import { forwardRef, ReactNode, useEffect } from "react";
import { useSectionContext } from "../contexts/sectionContext";
import { useIsInViewport } from "../hooks/useIsInViewport";
import { StyledSection } from "../styles/Section.styles";

type Props = {
    children: ReactNode;
    index: number;
};

const Section = forwardRef<HTMLDivElement, Props>(
    ({ children, index }: Props, ref: any) => {
        const { setCurrent } = useSectionContext();
        const isInView = useIsInViewport(ref);

        useEffect(() => {
            if (isInView) {
                setCurrent({ ref: ref, index: index });
            }
        }, [isInView]);

        return <StyledSection ref={ref}>{children}</StyledSection>;
    }
);

export default Section;
