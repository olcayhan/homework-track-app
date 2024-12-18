export type FIELD_PROPS = {
  name: string;
  label: string;
  placeholder?: string;
  type: FIELD_TYPE;
};

export interface FORM_FIELD_PROPS extends FIELD_PROPS {
  control: any;
}

export type FIELD_TYPE = "input" | "richText" | "image";
