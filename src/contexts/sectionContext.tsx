import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";

type SectionContext = {
    currentSection: Ref;
    setCurrentSection: React.Dispatch<React.SetStateAction<Ref>>;
    setRefArray: (refObj: RefObj) => void;
};
type Ref = React.RefObject<HTMLDivElement> | null;

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
    const [array, setArray] = useState<RefObj[]>([]);
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    useEffect(() => {
        setIsScrollingUp(() => {
            return array[array.length - 1]?.id < array[array.length - 2]?.id;
        });
        console.log(array);
    }, [array]);

    useEffect(() => {
        console.log(isScrollingUp, "scrUp");
    }, [isScrollingUp]);

    function setRefArray(refObj: RefObj) {
        if (
            array[array.length - 1]?.id === 0 &&
            array[array.length - 2]?.id === 1
        ) {
            setArray((prev) => [prev[prev.length - 1], refObj]);
        } else {
            setArray((prev) => [...prev, refObj]);
        }
    }

    return (
        <SectionContext.Provider
            value={{
                currentSection,
                setCurrentSection,
                setRefArray,
            }}
        >
            {children}
        </SectionContext.Provider>
    );
}
