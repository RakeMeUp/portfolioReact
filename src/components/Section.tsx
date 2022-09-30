import { forwardRef, ReactNode, useEffect, useState } from "react";
import { useSectionContext } from "../contexts/sectionContext";
import { useIsInViewport } from "../hooks/useIsInViewport";
import { Ref } from "../interfaces/Ref";
import { StyledSection } from "../styles/Section.styles";

type Props = {
    children: ReactNode;
    id: number;
};

/* 

true,false => UP
false,true => DOWN

*/

const Section = forwardRef<HTMLDivElement, Props>(
    ({ children, id }: Props, ref: any) => {
        const { setCurrent, setRefArray } = useSectionContext();
        const isInView = useIsInViewport(ref);

        useEffect(() => {
            if (isInView) {
                setCurrent({ ref: ref, id: id });
                setRefArray({ ref: ref, id: id });
            }
        }, [isInView]);

        return <StyledSection ref={ref}>{children}</StyledSection>;
    }
);

export default Section;
