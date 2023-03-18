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
  let addThumbnailCategory = (e: React.MouseEvent) => {
    e.preventDefault()

    uploadPageContext.setThumbnailCategories([...uploadPageContext.thumbnailCategories.concat({
      name: name,
      height: Number(height),
      width: Number(width)
    })])

    setName('')
    setHeight('')
    setWidth('')
  }

  return (
    <form method="post" className="border-2 border-dashed border-blue-800 rounded-b-md mb-6 flex">
      <FormField width="half">
        <Input action={setName} value={name} name="name" title="Name" placeholder="Name" />
      </FormField>
      <FormField>
        <Input action={setHeight} value={height} type="number" name="height" title="Height" placeholder="Height" />
      </FormField>
      <FormField>
        <Input action={setWidth} value={width} type="number" name="width" title="Width" placeholder="Width" />
      </FormField>
      <FormField>
        <SubmitButton action={addThumbnailCategory} />
      </FormField>
    </form>
  )
}