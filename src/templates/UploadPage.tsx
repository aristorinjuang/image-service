import { useState } from "react";
import ImageComparison from "../molecules/ImageComparison";
import Copyright from "../atoms/typography/Copyright";
import Description from "../atoms/typography/Description";
import Title from "../atoms/typography/Title";
import UploadPageContext, { ThumbnailCategories } from "../contexts/UploadPageContext";
import UploadForm from "../organics/UploadForm";
import { Props as DownloadButtonProps } from "../atoms/buttons/DownloadButton";
import DownloadList from "../organics/DownloadList";
import DeleteForm from "../organics/DeleteForm";
import AddForm from "../organics/AddForm";
import Issue from "../atoms/typography/Issue";

type Props = {
  title: string
  description: string
}

export default function UploadPage(props: Props) {
  let [downloadList, setDownloadList] = useState<DownloadButtonProps[]>([])
  let [thumbnailCategories, setThumbnailCategories] = useState<ThumbnailCategories>([
    {
      name: 'original',
      height: 1080,
      width: 1920,
      quality: 80
    }
  ])
  let [jpeg, setJPEG] = useState('');
  let [webp, setWebP] = useState('');

  return (
    <UploadPageContext.Provider value={{downloadList, setDownloadList, thumbnailCategories, setThumbnailCategories, setJPEG, setWebP}}>
      <div className="container mx-auto max-w-md my-8 px-2 sm:px-0">
        <Title value={props.title} />
        <Description value={props.description} />
        {thumbnailCategories.map((thumbnailCategory, index) => {
          return (
            <DeleteForm
              key={thumbnailCategory.name + '-' + index}
              name={thumbnailCategory.name}
              height={thumbnailCategory.height}
              width={thumbnailCategory.width}
              quality={thumbnailCategory.quality}
              isDisabled={thumbnailCategory.name === 'original'}
            />
          )
        })}
        <AddForm />
        <UploadForm />
        <DownloadList downloadList={downloadList} />
      </div>
      <ImageComparison jpeg={jpeg} webp={webp} />
      <Issue />
      <Copyright />
    </UploadPageContext.Provider>
  )
}