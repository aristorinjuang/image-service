import { useContext } from "react";
import Resizer from "react-image-file-resizer";
import UploadPageContext, { ThumbnailCategories } from "../../contexts/UploadPageContext";
import { FileUploader } from "react-drag-drop-files";
import { Props as DownloadButtonProps } from "../../atoms/buttons/DownloadButton";

const generateImages = (
  file: any,
  thumbnailCategories: ThumbnailCategories,
  setJPEG: (value: string) => void,
  setWebP: (value: string) => void,
  downloadList: DownloadButtonProps[]
) => {
  for (let thumbnailCategory of thumbnailCategories) {
    let filename = thumbnailCategory.name
    if (downloadList.length >= 2) {
      filename += '_' + (downloadList.length / 2 + 1)
    }
  
    try {
      Resizer.imageFileResizer(
        file,
        thumbnailCategory.width,
        thumbnailCategory.height,
        "JPEG",
        80,
        0,
        (uri) => {
          if (thumbnailCategory.name === 'original') {
            setJPEG(String(uri))
          }

          downloadList.push({
            filename: filename + '.jpg',
            href: String(uri)
          })
        }
      );
    } catch (err) {
      console.error(err);
    }
  
    try {
      Resizer.imageFileResizer(
        file,
        thumbnailCategory.width,
        thumbnailCategory.height,
        "WEBP",
        100,
        0,
        (uri) => {
          if (thumbnailCategory.name === 'original') {
            setWebP(String(uri))
          }

          downloadList.push({
            filename: filename + '.webp',
            href: String(uri)
          })
        }
      );
    } catch (err) {
      console.error(err);
    }
  }
}

export default function File() {
  let uploadPageContext = useContext(UploadPageContext);
  let handler = (file: any) => {
    if (file) {
      generateImages(
        file,
        uploadPageContext.thumbnailCategories,
        uploadPageContext.setJPEG,
        uploadPageContext.setWebP,
        uploadPageContext.downloadList
      )
    }
  }

  return (
    <FileUploader handleChange={handler} types={["JPG", "PNG", "GIF", "SVG"]} maxSize={16} />
  )
}