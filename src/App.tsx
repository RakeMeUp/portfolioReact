import { useRef, useState, useEffect } from "react";
import { StyledMain } from "./styles/App.styles";
import NextButton from "./components/NextButton";
import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Nav from "./components/Nav";
import { Ref } from "./interfaces/Ref";
import { useSectionContext } from "./contexts/sectionContext";
import Section from "./components/Section";
import TechStack from "./sections/TechStack";

function App() {
    const heroRef = useRef(null);
    const projRef = useRef(null);
    const contRef = useRef(null);
    const techRef = useRef(null);

    function scrollToNextSection(ref: Ref) {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    }

    const { setCurrent } = useSectionContext();
    const [refs, setRefs] = useState([] as Ref[]);

    useEffect(() => {
        setCurrent({ ref: heroRef, id: 0 });
        setRefs([heroRef, techRef, projRef, contRef]);
    }, []);

    return (
        <StyledMain>
            <NextButton ref={refs} scrollToNextSection={scrollToNextSection} />
            <Nav ref={refs} scrollToNextSection={scrollToNextSection} />

            <Section ref={heroRef} id={0}>
                <Hero />
            </Section>
            <Section ref={techRef} id={1}>
                <TechStack />
            </Section>
            <Section ref={projRef} id={2}>
                <Projects />
            </Section>
            <Section ref={contRef} id={3}>
                <Contacts />
            </Section>
        </StyledMain>
    );
}

export default App;
