import { forwardRef } from "react";
import Section from "../components/Section";
import { StyledHeader } from "../styles/shared.styles";

type Props = {};

const Hero = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <Section ref={ref}>
            <StyledHeader>
                <h1>Hero</h1>
                <h2>hero stuff</h2>
            </StyledHeader>
        </Section>
    );
});

export default Hero;
