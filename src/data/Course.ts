import { FIELD_PROPS } from "@/types/Field";

export const courseFormFields: FIELD_PROPS[] = [
  {
    name: "imagePath",
    label: "Image",
    type: "image",
  },
  {
    name: "name",
    label: "Name",
    placeholder: "Biology",
    type: "input",
  },
  {
    name: "description",
    label: "Description",
    type: "richText",
  },
];
