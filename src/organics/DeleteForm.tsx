import Input from "../atoms/inputs/Input";
import SubmitButton from "../atoms/buttons/SubmitButton";
import FormField from "../molecules/FormField";
import { useContext } from "react";
import UploadPageContext from "../contexts/UploadPageContext";

export type Props = {
  name: string
  height: number
  width: number
  quality: number
  isDisabled?: boolean
}

export default function DeleteForm(props: Props) {
  let uploadPageContext = useContext(UploadPageContext)
  let updateHeight = (value: string) => {
    let index = uploadPageContext.thumbnailCategories.findIndex(thumbnailCategory => {
      return thumbnailCategory.name === props.name
    })

    uploadPageContext.thumbnailCategories.at(index)!.height = Number(value) < 0 ? 0 : Number(value)
    uploadPageContext.setThumbnailCategories([...uploadPageContext.thumbnailCategories])
  }
  let updateWidth = (value: string) => {
    let index = uploadPageContext.thumbnailCategories.findIndex(thumbnailCategory => {
      return thumbnailCategory.name === props.name
    })

    uploadPageContext.thumbnailCategories.at(index)!.width = Number(value) < 0 ? 0 : Number(value)
    uploadPageContext.setThumbnailCategories([...uploadPageContext.thumbnailCategories])
  }
  let updateQuality = (value: string) => {
    let index = uploadPageContext.thumbnailCategories.findIndex(thumbnailCategory => {
      return thumbnailCategory.name === props.name
    })

    uploadPageContext.thumbnailCategories.at(index)!.quality = Number(value) > 100 ? 100 : Number(value) < 100 ? 0 : Number(value)
    uploadPageContext.setThumbnailCategories([...uploadPageContext.thumbnailCategories])
  }
  let deleteThumbnailCategory = (e: React.MouseEvent) => {
    e.preventDefault()

    uploadPageContext.setThumbnailCategories([...uploadPageContext.thumbnailCategories.filter(thumbnailCategory => {
      return thumbnailCategory.name !== props.name
    })])
  }
  let className = "border-x-2 border-t-2 border-dashed border-blue-800 flex"
  let submitButton = <SubmitButton action={deleteThumbnailCategory} type="delete" />
  if (props.isDisabled) {
    className = "border-x-2 border-t-2 border-dashed border-blue-800 rounded-t-md flex"
    submitButton = <SubmitButton type="dummy" />
  }

  return (
    <form method="post" className={className}>
      <FormField width={2}>
        <Input value={props.name} name="name" title="Name" placeholder="Name" isDisabled={true} />
      </FormField>
      <FormField>
        <Input action={updateHeight} value={String(props.height)} type="number" name="height" title="Height" placeholder="Height" />
      </FormField>
      <FormField>
        <Input action={updateWidth} value={String(props.width)} type="number" name="width" title="Width" placeholder="Width" />
      </FormField>
      <FormField>
        <Input action={updateQuality} value={String(props.quality)} type="number" name="quality" title="Quality" placeholder="Quality" />
      </FormField>
      <FormField>
        {submitButton}
      </FormField>
    </form>
  )
}