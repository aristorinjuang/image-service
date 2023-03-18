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
      className="w-full p-2"
    />
  )
}