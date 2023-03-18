import DownloadIcon from "../icons/DownloadIcon"

export type Props = {
  filename: string
  href: string
}

export default function DownloadButton(props: Props) {
  return (
    <a download={props.filename} href={props.href} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center w-full cursor-pointer">
      <DownloadIcon />
      <span>{props.filename}</span>
    </a>
  )
}