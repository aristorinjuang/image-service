import { createContext } from "react";

const ImageContext = createContext({
  setJPEG: (value: string) => {},
  setWebP: (value: string) => {}
})

export default ImageContext;