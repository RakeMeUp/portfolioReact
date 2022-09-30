import { forwardRef } from "react";
import Section from "../components/Section";

type Props = {};

const Hero = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return <Section ref={ref}>Hero</Section>;
});

export default Hero;
