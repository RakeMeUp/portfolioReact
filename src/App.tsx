import { useRef } from 'react'
import styled from 'styled-components'
import NextButton from './components/NextButton'
import { Ref, useSectionContext } from './contexts/sectionContext'
import { useCustomRef } from './hooks/useCustomRef'
import Contacts from './sections/Contacts'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

const StyledMain = styled.main`
  position: absolute;
`

function App() {

  const {setNextSection, setSectionToIndex, setSectionToRef, makeRefArray, refArray, section} = useSectionContext()

  /* const refArr = [] as Ref[]

  for (let i = 0; i < 4; i++) {
    refArr[i] = useRef(null)
  } */

  const heroRef = useCustomRef("hero")
  const projRef = useCustomRef("proj")
  const contRef = useCustomRef("cont")

  return (
    <StyledMain>
        <>
          <NextButton section={section} />
          <Hero ref={heroRef.ref} reference={heroRef}/>
          <Projects ref={projRef.ref} reference={projRef}/>
          <Contacts ref={contRef.ref} reference={contRef}/>
        </>
      
    </StyledMain>    
  )
}

export default App
