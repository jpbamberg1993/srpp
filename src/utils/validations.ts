import { IValues } from "@/components/Form";

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

export const isEmail = (values: IValues, fieldName: string): string =>
  values[fieldName] &&
  values[fieldName].search(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
  ? "This must be in a valid email format"
  : "";

const sanitizePhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/\D/g, '')
}

export const isPhoneNumber = (values: IValues, fieldName: string): string => {
  const phoneNumber = sanitizePhoneNumber(values[fieldName])
  return phoneNumber.match(/^\d{10}$/) ? "" : "Not a valid phone number"
}
