import { forwardRef } from "react";
import Section from "../components/Section";
import { StyledHeader } from "../styles/shared.styles";

type Props = {};

const Hero = () => {
    return (
        <StyledHeader>
            <h1>Hero</h1>
            <h2>hero stuff</h2>
        </StyledHeader>
    );
};

export default Hero;
