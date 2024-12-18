import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ImageUpload from "./ImageUpload";
import RichTextEditor from "./RichTextEditor";
import { FORM_FIELD_PROPS } from "@/types/Field";

export function CustomFormField({
  control,
  name,
  label,
  placeholder,
  type,
}: FORM_FIELD_PROPS) {
  const generateFormField = (field: any) => {
    const formFields = {
      input: <Input placeholder={placeholder} {...field} />,
      richText: (
        <RichTextEditor value={field.value} onChange={field.onChange} />
      ),
      image: <ImageUpload value={field.value} onChange={field.onChange} />,
    };
    return formFields[type];
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{generateFormField(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
