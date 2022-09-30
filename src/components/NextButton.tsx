import styled from "styled-components";
import React from "react";

const StyledFloatingWrapper = styled.div`
    position: fixed;
    right: 0;
`;

type Props = {
    scrollToNextSection: () => void;
};

const NextButton = React.forwardRef(({ scrollToNextSection }: Props, ref) => {
    return (
        <StyledFloatingWrapper>
            <button onClick={scrollToNextSection}>{"hey"}</button>
        </StyledFloatingWrapper>
    );
});

export default NextButton;
