import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import NextButton from "./components/NextButton";
import { useSectionContext } from "./contexts/sectionContext";
import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

const StyledMain = styled.main`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
`;

type Ref = React.RefObject<HTMLDivElement> | null;

function App() {
    const heroRef = useRef(null);
    const projRef = useRef(null);
    const contRef = useRef(null);

    const { initSections, currentSection } = useSectionContext();
    const [refs, setRefs] = useState<Ref[]>([]);

    useEffect(() => {
        setRefs([heroRef, projRef, contRef]);
    }, []);

    useEffect(() => {
        initSections(refs);
    }, [refs]);

    function scrollToNextSection(ref: Ref) {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <StyledMain>
            <NextButton
                scrollToNextSection={() => scrollToNextSection(currentSection)}
            />
            <Hero ref={heroRef} />
            <Projects ref={projRef} />
            <Contacts ref={contRef} />
        </StyledMain>
    );
}

export default App;
