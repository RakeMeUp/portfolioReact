import { useRef, useState, useEffect } from "react";
import { StyledMain } from "./styles/App.styles";
import { useSectionContext } from "./contexts/sectionContext";
import NextButton from "./components/NextButton";
import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Nav from "./components/Nav";

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
            <Nav />
            <Hero ref={heroRef} />
            <Projects ref={projRef} />
            <Contacts ref={contRef} />
        </StyledMain>
    );
}

export default App;
