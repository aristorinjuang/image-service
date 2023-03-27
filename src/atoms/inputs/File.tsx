import { useContext } from "react";
import Resizer from "react-image-file-resizer";
import UploadPageContext, { ThumbnailCategories } from "../../contexts/UploadPageContext";
import { FileUploader } from "react-drag-drop-files";
import { Props as DownloadButtonProps } from "../../atoms/buttons/DownloadButton";

function responseUriFuncJPEG(
  setJPEG: (value: string) => void,
  filename: string,
  thumbnailCategoryName: string,
  downloadList: DownloadButtonProps[]
): (uri: string | Blob | File | ProgressEvent<FileReader>) => void {
  return function(uri) {
    if (thumbnailCategoryName === 'original') {
      setJPEG(String(uri))
    }

    downloadList.push({
      filename: `${filename}${thumbnailCategoryName === 'original' ? '' : '_' + thumbnailCategoryName}.jpg`,
      href: String(uri)
    })
  }
}

function responseUriFuncWebP(
  setWebP: (value: string) => void,
  filename: string,
  thumbnailCategoryName: string,
  downloadList: DownloadButtonProps[]
): (uri: string | Blob | File | ProgressEvent<FileReader>) => void {
  return function(uri) {
    if (thumbnailCategoryName === 'original') {
      setWebP(String(uri))
    }

    downloadList.push({
      filename: `${filename}${thumbnailCategoryName === 'original' ? '' : '_' + thumbnailCategoryName}.webp`,
      href: String(uri)
    })
  }
}

function fileToFilename(file: any): string {
  let chunks = file.name.split('.')
  let filename = chunks.slice(0, chunks.length - 1).join('.')

  return filename
}

function generateImages(
  file: any,
  thumbnailCategories: ThumbnailCategories,
  setJPEG: (value: string) => void,
  setWebP: (value: string) => void,
  downloadList: DownloadButtonProps[]
) {
  let filename = fileToFilename(file);

  for (let thumbnailCategory of thumbnailCategories) {
    try {
      Resizer.imageFileResizer(
        file,
        thumbnailCategory.width,
        thumbnailCategory.height,
        "JPEG",
        thumbnailCategory.quality,
        0,
        responseUriFuncJPEG(setJPEG, filename, thumbnailCategory.name, downloadList)
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
        thumbnailCategory.quality,
        0,
        responseUriFuncWebP(setWebP, filename, thumbnailCategory.name, downloadList)
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