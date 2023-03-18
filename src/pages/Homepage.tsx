import UploadPage from "../templates/UploadPage"

export default function Homepage() {
  return (
    <UploadPage
      title={String(process.env.REACT_APP_TITLE)}
      description="Convert any images to JPEG and WebP, compress, resize, and generate thumbnails."
    />
  )
}