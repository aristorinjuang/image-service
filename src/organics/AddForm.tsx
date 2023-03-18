import { useContext, useState } from "react";
import Input from "../atoms/inputs/Input";
import SubmitButton from "../atoms/buttons/SubmitButton";
import FormField from "../molecules/FormField";
import UploadPageContext from "../contexts/UploadPageContext";

export default function AddForm() {
  let uploadPageContext = useContext(UploadPageContext);
  let [name, setName] = useState('');
  let [height, setHeight] = useState('');
  let [width, setWidth] = useState('');
  let [quality, setQuality] = useState('');
  let updateHeight = (value: string) => {
    let height = Number(value)

    if (height < 0) {
      setHeight('')
    } else {
      setHeight(value)
    }
  }
  let updateWidth = (value: string) => {
    let width = Number(value)

    if (width < 0) {
      setWidth('')
    } else {
      setWidth(value)
    }
  }
  let updateQuality = (value: string) => {
    let quality = Number(value)

    if (quality > 100) {
      setQuality('100')
    } else if (quality < 0) {
      setQuality('')
    } else {
      setQuality(value)
    }
  }
  let addThumbnailCategory = (e: React.MouseEvent) => {
    e.preventDefault()

    if (name !== '' && Number(height) > 0 && Number(width) > 0) {
      uploadPageContext.setThumbnailCategories([...uploadPageContext.thumbnailCategories.concat({
        name: name,
        height: Number(height),
        width: Number(width),
        quality: Number(quality)
      })])

      setName('')
      setHeight('')
      setWidth('')
      setQuality('')
    }
  }

  return (
    <form method="post" className="border-2 border-dashed border-blue-800 rounded-b-md mb-6 flex">
      <FormField width={2}>
        <Input action={setName} value={name} name="name" title="Name" placeholder="Name" />
      </FormField>
      <FormField>
        <Input action={updateHeight} value={height} type="number" name="height" title="Height" placeholder="Height" />
      </FormField>
      <FormField>
        <Input action={updateWidth} value={width} type="number" name="width" title="Width" placeholder="Width" />
      </FormField>
      <FormField>
        <Input action={updateQuality} value={quality} type="number" name="quality" title="Quality" placeholder="Quality" />
      </FormField>
      <FormField>
        <SubmitButton action={addThumbnailCategory} />
      </FormField>
    </form>
  )
}