import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";

type SectionContext = {
    currentSection: Ref;
    prevSection: Ref;
    sectionArray: Ref[];
    stepToNextSection: () => void;
    stepToPreviousSection: () => void;
    getCurrentSectionId: (ref: Ref) => number;
    initSections: (refArray: Ref[]) => void;
};
type Ref = React.RefObject<HTMLDivElement> | null;

const SectionContext = createContext({} as SectionContext);
export function useSectionContext() {
    return useContext(SectionContext);
}

export function SectionContextProvider({ children }: { children: ReactNode }) {
    const [currentSection, setCurrentSection] = useState<Ref>(null);
    const [prevSection, setPrevSection] = useState<Ref>(null);
    const [sectionArray, setSectionArray] = useState<Ref[]>([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCurrentSection(sectionArray[1]);
        setPrevSection(sectionArray[0]);
        console.log(currentSection, "init");
        console.log(prevSection, "init");
    }, [sectionArray]);

    function initSections(refArray: Ref[]) {
        setSectionArray(refArray);
    }

    function stepToNextSection() {
        setCount((prev) => {
            return (prev + 1) % 3;
        });
        setPrevSection(currentSection);
        setCurrentSection(sectionArray[count]);

        console.log("stepping sections", count);
        console.log("prev", getCurrentSectionId(prevSection));
        console.log("curr", getCurrentSectionId(currentSection));
        console.log(sectionArray);
    }
    function stepToPreviousSection() {
        setCount((prev) => {
            return (prev - 1) % 3;
        });
        setPrevSection(currentSection);
        setCurrentSection(sectionArray[count]);

        console.log("stepping sections", count);
        console.log("prev", getCurrentSectionId(prevSection));
        console.log("curr", getCurrentSectionId(currentSection));
        console.log(sectionArray);
    }

    function getCurrentSectionId(ref: Ref) {
        return sectionArray.findIndex((e) => e === ref);
    }

    return (
        <SectionContext.Provider
            value={{
                initSections,
                currentSection,
                sectionArray,
                stepToNextSection,
                getCurrentSectionId,
                stepToPreviousSection,
                prevSection,
            }}
        >
            {children}
        </SectionContext.Provider>
    );
}
