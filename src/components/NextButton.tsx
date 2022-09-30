import React from "react";
import { StyledFloatingWrapper } from "../styles/NextButton.styles";

type Props = {
    scrollToNextSection: () => void;
};

const NextButton = React.forwardRef(({ scrollToNextSection }: Props, ref) => {
    return (
        <StyledFloatingWrapper>
            <button onClick={scrollToNextSection}>Projects</button>
        </StyledFloatingWrapper>
    );
});

export default NextButton;
