import { forwardRef } from "react";
import Section from "../components/Section";
import { StyledHeader } from "../styles/shared.styles";

type Props = {};

const Contacts = forwardRef<HTMLDivElement, Props>(({}: Props, ref) => {
    return (
        <Section ref={ref}>
            <StyledHeader>
                <h1>Contacts</h1>
                <h2>Hit me up</h2>
            </StyledHeader>
        </Section>
    );
});

export default Contacts;
