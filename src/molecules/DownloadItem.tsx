import DownloadButton, { Props } from "../atoms/buttons/DownloadButton";

export default function DownloadItem(props: Props) {
  return <li className="mt-3">
    <DownloadButton filename={props.filename} href={props.href} />
  </li>
}