export type Props = {
  action?: (value: string) => void
  value?: string
  type?: string
  name: string
  title: string
  placeholder: string
  isDisabled?: boolean
}

export default function Input(props: Props) {
  let type = "text"
  switch (props.type) {
    case "number":
      type = "number"
  }

  return (
    <input
      onChange={e => props.action!(e.target.value) }
      value={props.value}
      type={type}
      name={props.name}
      title={props.title}
      placeholder={props.placeholder}
      disabled={props.isDisabled}
      min={type === 'number' ? 0 : undefined}
      max={props.name === 'quality' ? 100 : undefined}
      className="w-full p-2"
    />
  )
}