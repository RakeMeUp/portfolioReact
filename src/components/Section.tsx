import { forwardRef, ReactNode, SetStateAction, useEffect, useState } from "react";
import { ForwardedRef, Ref, useSectionContext } from "../contexts/sectionContext";
import { useIsInViewport } from "../hooks/useIsInViewport";
import { StyledSection } from "./Section.styles";

type Props = {
    children: ReactNode;
};

const Section = forwardRef<HTMLDivElement, Props>(({ children }: Props, ref) => {
        const { setSectionToRef } = useSectionContext();
        const isInView = useIsInViewport(ref);

        const [inview, setInview] = useState(null)

        useEffect(()=>{
            setInview(ref as SetStateAction<null>)
        },[])

        useEffect(() => {
            if (isInView) {
                console.log("inview and setting new ref", ref);
                setSectionToRef(ref);
            }else{
                console.log("not setting anything", inview)
            }
        }, [isInView]);

        return <StyledSection ref={ref}>{children}</StyledSection>;
    }
);

export default Section;
