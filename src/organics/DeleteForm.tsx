import Input from "../atoms/inputs/Input";
import SubmitButton from "../atoms/buttons/SubmitButton";
import FormField from "../molecules/FormField";
import { useContext } from "react";
import UploadPageContext from "../contexts/UploadPageContext";

export type Props = {
  name: string
  height: number
  width: number
  isDisabled?: boolean
}

export default function DeleteForm(props: Props) {
  let uploadPageContext = useContext(UploadPageContext)
  let deleteThumbnailCategory = (e: React.MouseEvent) => {
    e.preventDefault()

    uploadPageContext.setThumbnailCategories([...uploadPageContext.thumbnailCategories.filter(thumbnailCategory => {
      return thumbnailCategory.name !== props.name
    })])
  }

  if (props.isDisabled) {
    return (
      <form method="post" className="border-x-2 border-t-2 border-dashed border-blue-800 rounded-t-md flex">
        <FormField width="half">
          <Input value={props.name} name="name" title="Name" placeholder="Name" isDisabled={true} />
        </FormField>
        <FormField>
          <Input value={String(props.height)} type="number" name="height" title="Height" placeholder="Height" />
        </FormField>
        <FormField>
          <Input value={String(props.width)} type="number" name="width" title="Width" placeholder="Width" />
        </FormField>
        <FormField><SubmitButton type="dummy" /></FormField>
      </form>
    )
  }
  return (
    <form method="post" className="border-x-2 border-t-2 border-dashed border-blue-800 flex">
      <FormField width="half">
        <Input value={props.name} name="name" title="Name" placeholder="Name" />
      </FormField>
      <FormField>
        <Input value={String(props.height)} type="number" name="height" title="Height" placeholder="Height" />
      </FormField>
      <FormField>
        <Input value={String(props.width)} type="number" name="width" title="Width" placeholder="Width" />
      </FormField>
      <FormField>
        <SubmitButton action={deleteThumbnailCategory} type="delete" />
      </FormField>
    </form>
  )
}