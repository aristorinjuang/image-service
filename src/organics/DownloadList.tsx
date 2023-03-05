import DownloadItem from "../molecules/DownloadItem";
import { Props } from "../atoms/buttons/DownloadButton";

export type DownloadListProps = {
  downloadList: Props[]
}

export default function DownloadList(props: DownloadListProps) {
  return (
    <ul>
      {props.downloadList.map(downloadItem => {
        return <DownloadItem key={downloadItem.filename} filename={downloadItem.filename} href={downloadItem.href} />
      })}
    </ul>
  )
}