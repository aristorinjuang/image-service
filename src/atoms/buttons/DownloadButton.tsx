export type Props = {
  filename: string
  href: string
}

export default function DownloadButton(props: Props) {
  return (
    <a download={props.filename} href={props.href} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center w-full cursor-pointer">
      <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span>{props.filename}</span>
    </a>
  )
}