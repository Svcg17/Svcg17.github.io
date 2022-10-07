import { useEffect, useState } from "react"

// Gets the screen width and handles resizing
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(undefined)
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth)
    window.addEventListener("resize", handleResize)
    handleResize() // set initial window size
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowSize
}

export default useWindowSize
