export type Props = {
  children: JSX.Element
  width?: number
}

export default function FormField(props: Props) {
  let width = '1/6'
  switch (props.width) {
    case 2:
      width = '2/6'
  }

  return (
    <p className={"flex-auto w-" + width}>{props.children}</p>
  )
}