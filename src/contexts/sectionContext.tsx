import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { Ref } from "../interfaces/Ref";

type SectionContext = {
    currentSection: Ref;
    currentSectionId: number;
    setCurrent: (refObj: RefObj) => void;
    setRefArray: (refObj: RefObj) => void;
    isScrollingUp: boolean;
};
type RefObj = {
    ref: Ref;
    id: number;
};

const SectionContext = createContext({} as SectionContext);
export function useSectionContext() {
    return useContext(SectionContext);
}

export function SectionContextProvider({ children }: { children: ReactNode }) {
    const [currentSection, setCurrentSection] = useState<Ref>(null);
    const [currentSectionId, setCurrentSectionId] = useState(0);
    const [array, setArray] = useState<RefObj[]>([]);
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    useEffect(() => {
        setIsScrollingUp(() => {
            return array[array.length - 1]?.id < array[array.length - 2]?.id;
        });
        console.log(array, "isScr set");
    }, [array]);

    useEffect(() => {
        console.log(isScrollingUp, "scrUp");
    }, [isScrollingUp]);

    function setRefArray(refObj: RefObj) {
        if (array.length > 1) {
            setArray((prev) => [prev[prev.length - 1], refObj]);
        } else {
            setArray((prev) => [...prev, refObj]);
        }
    }

    function setCurrent({ ref, id }: RefObj) {
        setCurrentSection(ref);
        setCurrentSectionId(id);
    }

    return (
        <SectionContext.Provider
            value={{
                currentSection,
                currentSectionId,
                setCurrent,
                setRefArray,
                isScrollingUp,
            }}
        >
            {children}
        </SectionContext.Provider>
    );
}
