import { createContext, SetStateAction, useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import NextButton from './components/NextButton'
import Contacts from './sections/Contacts'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

const StyledMain = styled.main`
  position: absolute;
`

type Ref = React.RefObject<HTMLDivElement>
type ForwardedRef = React.ForwardedRef<HTMLDivElement>

type SectionContext = {
    setNextSection: ()=>void,
    setSectionToIndex: (sectionIndex: number)=>void
    setSectionToRef: (ref:Ref|ForwardedRef)=>void
}

const SectionContext = createContext({} as SectionContext);
export function useSectionContext(){
    return useContext(SectionContext)
}

function App() {

  const refArray = [] as Ref[]
  refArray[0] = useRef<HTMLDivElement>(null);
  refArray[1] = useRef<HTMLDivElement>(null);
  refArray[2] = useRef<HTMLDivElement>(null);
  refArray[3] = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState(refArray[0])

  function setNextSection(){
    setSection(prev => refArray[(refArray.findIndex((e)=>e === prev) + 1) % 4])
    console.log(section)
  }

  function setSectionToIndex(sectionIndex: number){
    setSection(refArray[sectionIndex])
    console.log(section)
  }

  function setSectionToRef(ref: Ref | ForwardedRef){
    setSection(ref as SetStateAction<Ref>)
    console.log(section)
  }

  return (
    <StyledMain>
      <SectionContext.Provider value={{
          setNextSection,
          setSectionToIndex,
          setSectionToRef
        }}>
        <NextButton section={section} />
        <Hero ref={refArray[0]} />
        <Projects ref={refArray[1]} />
        <Contacts ref={refArray[2]} />

      </SectionContext.Provider>

    </StyledMain>
  )
}

export default App
