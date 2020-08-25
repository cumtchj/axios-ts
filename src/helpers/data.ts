import { isPlainObj } from './util'

export function transformReq(data: any): any {
  if (isPlainObj(data)) return JSON.stringify(data)
  return data
}
