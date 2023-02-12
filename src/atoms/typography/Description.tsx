type Props = {
  value: string
}

export default function Description(props: Props) {
  return (
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">{props.value}</p>
  )
}