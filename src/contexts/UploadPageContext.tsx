import { createContext } from "react";
import { Props } from "../atoms/buttons/DownloadButton";

export type UploadPageContextType = {
  downloadList: Props[]
  setJPEG: (value: string) => void
  setWebP: (value: string) => void
}

const UploadPageContext = createContext<UploadPageContextType>({
  downloadList: [],
  setJPEG: (value: string) => {},
  setWebP: (value: string) => {},
})

export default UploadPageContext;