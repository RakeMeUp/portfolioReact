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
import { sectionData } from "./data";
import { StyledHeader } from "./styles/App.styles";

function App() {
    const heroRef = useRef(null);
    const projRef = useRef(null);
    const contRef = useRef(null);
    const techRef = useRef(null);
    const expRef = useRef(null);

    function scrollToNextSection(ref: Ref) {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    }

    const { setCurrent } = useSectionContext();
    const [refs, setRefs] = useState([] as Ref[]);

    const SECTIONS = [
        <Hero />,
        <Projects />,
        <Contacts />,
        <TechStack />,
        <TechStack />,
    ];

    useEffect(() => {
        setCurrent({ ref: heroRef, index: 0 });
        setRefs([heroRef, techRef, projRef, contRef, expRef]);
    }, []);

    return (
        <StyledMain>
            {/* ignore ref errors, because i send multiple refs in one ref 
                attribute, and ts doesnt like that. well too bad! */}
            {/*@ts-expect-error*/}
            <NextButton ref={refs} scrollToNextSection={scrollToNextSection} />
            {/*@ts-expect-error*/}
            <Nav ref={refs} scrollToNextSection={scrollToNextSection} />

            {refs.length &&
                SECTIONS.map((section, i) => {
                    return (
                        <Section ref={refs[i]} index={i}>
                            <StyledHeader>
                                <h1>{sectionData[i].title}</h1>
                                <h2>{sectionData[i].subtitle}</h2>
                            </StyledHeader>
                            {section}
                        </Section>
                    );
                })}
        </StyledMain>
    );
}

export default App;
