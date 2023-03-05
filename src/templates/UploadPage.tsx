import { useState } from "react";
import ImageComparison from "../molecules/ImageComparison";
import Copyright from "../atoms/typography/Copyright";
import Description from "../atoms/typography/Description";
import Title from "../atoms/typography/Title";
import ImageContext from "../contexts/UploadPageContext";
import UploadForm from "../organics/UploadForm";
import { Props as DownloadButtonProps } from "../atoms/buttons/DownloadButton";
import DownloadList from "../organics/DownloadList";

type Props = {
  title: string
  description: string
}

export default function UploadPage(props: Props) {
  let [downloadList] = useState<DownloadButtonProps[]>([])
  let [jpeg, setJPEG] = useState('');
  let [webp, setWebP] = useState('');

  return (
    <ImageContext.Provider value={{downloadList, setJPEG, setWebP}}>
      <div className="container mx-auto max-w-md my-8">
        <Title value={props.title} />
        <Description value={props.description} />
        <UploadForm />
        <DownloadList downloadList={downloadList} />
      </div>
      <ImageComparison jpeg={jpeg} webp={webp} />
      <Copyright />
    </ImageContext.Provider>
  )
}