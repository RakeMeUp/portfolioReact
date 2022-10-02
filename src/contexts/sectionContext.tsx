import { createContext, useContext, ReactNode, useState } from "react";
import { Ref } from "../interfaces/Ref";

type SectionContext = {
    currentSection: Ref;
    currentSectionIndex: number;
    setCurrent: (refObj: RefObj) => void;
};
type RefObj = {
    ref: Ref;
    index: number;
};

const SectionContext = createContext({} as SectionContext);
export function useSectionContext() {
    return useContext(SectionContext);
}

export function SectionContextProvider({ children }: { children: ReactNode }) {
    const [currentSection, setCurrentSection] = useState<Ref>(null);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    function setCurrent({ ref, index }: RefObj) {
        setCurrentSection(ref);
        setCurrentSectionIndex(index);
    }

    return (
        <SectionContext.Provider
            value={{
                currentSection,
                currentSectionIndex,
                setCurrent,
            }}
        >
            {children}
        </SectionContext.Provider>
    );
}
