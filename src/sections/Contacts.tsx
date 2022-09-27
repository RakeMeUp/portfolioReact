import { forwardRef } from "react"
import Section from "../components/Section"

type Props = {
}

const Contacts = forwardRef<HTMLDivElement, Props>(({}: Props, ref)=>{
  return (
    <Section ref={ref}>
        Contacts
    </Section>
  )
})

export default Contacts