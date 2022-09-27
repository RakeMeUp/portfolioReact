import { useRef } from "react"

export const useCustomRef = (name: string) => {
  return {
    name: name,
    ref: useRef(null)
  }
}
