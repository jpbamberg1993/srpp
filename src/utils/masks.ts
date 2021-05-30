import { sanitizePhoneNumber } from './validations'

export const maskPhoneNumber = (value: string): string => {
  if (!value) return ''
  const cleanNumber = sanitizePhoneNumber(value)
  return `(${cleanNumber.substring(0, 3)}) ${cleanNumber.substring(3, 6)}-${cleanNumber.substring(6, cleanNumber.length)}`
}