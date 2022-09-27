import { createContext, ReactNode, SetStateAction, useContext, useRef, useState } from "react"

export type Ref = React.RefObject<HTMLDivElement>
export type ForwardedRef = React.ForwardedRef<HTMLDivElement>

type SectionContext = {
    setNextSection: ()=>void,
    setSectionToIndex: (sectionIndex: number)=>void
    setSectionToRef: (ref:Ref|ForwardedRef)=>void
    makeRefArray: (amount: number) => Ref[]
    section: Ref
    refArray: Ref[]
}

type Props = {
    children: ReactNode
}

const SectionContext = createContext({} as SectionContext);
export function useSectionContext(){
    return useContext(SectionContext)
}

const sectionContext = ({children}: Props) => {

  const [section, setSection] = useState({} as Ref)
  const [refArray, setRefArray] = useState([] as Ref[])

  function setNextSection(){
    setSection(prev => refArray[(refArray.findIndex((e)=>e === prev) + 1) % 4])
    console.log(section)
  }

  function setSectionToIndex(sectionIndex: number){
    setSection(refArray[sectionIndex])
    console.log("setSectionToIndex",section)
  }

  function setSectionToRef(ref: Ref | ForwardedRef){
    setSection(ref as SetStateAction<Ref>)
    console.log("setSectionToRef",section)
  }

  function makeRefArray(amount: number){
    const tempArray: Ref[] = []
    for (let i = 0; i < amount; i++) {
        tempArray[i] = useRef<HTMLDivElement>(null)
    }
    /* setRefArray(prev => prev.concat(tempArray)) */
    console.log(refArray)
    return tempArray
  }


  return (
    <SectionContext.Provider value={{
        setNextSection,
        setSectionToIndex,
        setSectionToRef,
        makeRefArray,
        refArray,
        section
      }}>
        {children}
    </SectionContext.Provider>
  )
}

export default sectionContext