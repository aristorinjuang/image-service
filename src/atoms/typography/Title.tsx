type Props = {
  value: string
}

export default function Title(props: Props) {
  return (
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{props.value}</h1>
  )
}