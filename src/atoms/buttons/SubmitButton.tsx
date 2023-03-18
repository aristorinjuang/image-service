import AddIcon from "../icons/AddIcon"
import CloseIcon from "../icons/CloseIcon"

export type Props = {
  action?: (e: React.MouseEvent) => void
  type?: string
}

export default function SubmitButton(props: Props) {
  let icon = <AddIcon />
  switch (props.type) {
    case 'delete':
      icon = <CloseIcon />

      break
    case 'dummy':
      return (
        <button type="submit" value="Submit" title="Submit" className="display-block w-1/6 h-1/6">
        </button>
      )
  }

  return (
    <button onClick={props.action} type="submit" value="Submit" title="Submit" className="display-block w-full cursor-pointer p-2">
      {icon}
    </button>
  )
}