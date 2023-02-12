import { useContext } from "react";
import Resizer from "react-image-file-resizer";
import ImageContext from "../../contexts/ImageContext";
import { FileUploader } from "react-drag-drop-files";

type ThumbnailCategory = {
  height: number
  suffix: string
  width: number
}
type ThumbnailCategories = ThumbnailCategory[]

const fileTypes = ["JPG", "PNG", "GIF", "SVG"];
const thumbnailCategories: ThumbnailCategories = [
  {
    height: 1080,
    suffix: 'original',
    width: 1920
  }
];
const generateImages = (
  file: any,
  setJPEG: (value: string) => void,
  setWebP: (value: string) => void
) => {
  for (let thumbnailCategory of thumbnailCategories) {
    try {
      Resizer.imageFileResizer(
        file,
        thumbnailCategory.width,
        thumbnailCategory.height,
        "JPEG",
        80,
        0,
        (uri) => {
          if (thumbnailCategory.suffix === 'original') {
            setJPEG(String(uri))
          }
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
          if (thumbnailCategory.suffix === 'original') {
            setWebP(String(uri))
          }
        }
      );
    } catch (err) {
      console.error(err);
    }
  }

  // TODO: zip or post them
}

export default function File() {
  let image = useContext(ImageContext);
  let handler = (file: any) => {
    if (file) {
      generateImages(file, image.setJPEG, image.setWebP)
    }
  }

  return (
    <FileUploader handleChange={handler} types={fileTypes} maxSize={16} />
  )
}