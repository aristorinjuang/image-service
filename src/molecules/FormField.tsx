export type Props = {
  children: JSX.Element
  width?: string
}

export default function FormField(props: Props) {
  let width = '1/6'
  switch (props.width) {
    case 'half':
      width = '3/6'
  }

  return (
    <p className={"flex-auto w-" + width}>{props.children}</p>
  )
}