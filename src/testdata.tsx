import { Props as DownloadButtonProps } from './atoms/buttons/DownloadButton'
import { ThumbnailCategories } from './contexts/UploadPageContext';

const downloadList: DownloadButtonProps[] = [
  {
    filename: 'original.jpg',
    href: '/original.jpg'
  },
  {
    filename: 'original.webp',
    href: '/original.webp'
  },
  {
    filename: 'thumbnail.jpg',
    href: '/thumbnail.jpg'
  },
  {
    filename: 'thumbnail.webp',
    href: '/thumbnail.webp'
  }
]
const setDownloadList = (_: DownloadButtonProps[]) => {}
const thumbnailCategories: ThumbnailCategories = [
  {
    name: 'original',
    height: 1080,
    width: 1920,
    quality: 80
  },
  {
    name: 'thumbnail',
    height: 300,
    width: 300,
    quality: 80
  }
]
const setThumbnailCategories = (_: ThumbnailCategories) => {}
const setJPEG = (_: string) => {}
const setWebP = (_: string) => {}

export { downloadList, setDownloadList, thumbnailCategories, setThumbnailCategories, setJPEG, setWebP }