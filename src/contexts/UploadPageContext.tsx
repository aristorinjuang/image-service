import { createContext } from "react";
import { Props as DownloadButtonProps } from "../atoms/buttons/DownloadButton";

export type ThumbnailCategory = {
  name: string
  height: number
  width: number
  quality: number
}
export type ThumbnailCategories = ThumbnailCategory[]

export type UploadPageContextType = {
  downloadList: DownloadButtonProps[]
  setDownloadList: (downloadList: DownloadButtonProps[]) => void
  thumbnailCategories: ThumbnailCategories
  setThumbnailCategories: (thumbnailCategories: ThumbnailCategories) => void
  setJPEG: (value: string) => void
  setWebP: (value: string) => void
}

const UploadPageContext = createContext<UploadPageContextType>({
  downloadList: [],
  setDownloadList: (downloadList: DownloadButtonProps[]) => {},
  thumbnailCategories: [],
  setThumbnailCategories: (thumbnailCategories: ThumbnailCategories) => {},
  setJPEG: (value: string) => {},
  setWebP: (value: string) => {},
})

export default UploadPageContext;