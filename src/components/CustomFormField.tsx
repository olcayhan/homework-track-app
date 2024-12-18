import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ImageUpload from "./ImageUpload";
import RichTextEditor from "./RichTextEditor";

type FormFieldProps = {
  label: string;
  placeholder?: string;
  field: any;
  type: "input" | "richText" | "image";
};

export function CustomFormField({
  label,
  placeholder,
  field,
  type,
}: FormFieldProps) {
  const generateFormField = {
    input: <Input placeholder={placeholder} {...field} />,
    richText: <RichTextEditor value={field.value} onChange={field.onChange} />,
    image: <ImageUpload value={field.value} onChange={field.onChange} />,
  };

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{generateFormField[type]}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
