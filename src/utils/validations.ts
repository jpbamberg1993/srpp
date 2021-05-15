import { IValues } from "@/components/ContactForm";

export interface IValidation {
  rule: (values: IValues, fieldName: string, args: any) => string
  args?: any
}

export const required = (values: IValues, fieldName: string): string =>
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === ""
    ? "This must be populated"
    : "";
