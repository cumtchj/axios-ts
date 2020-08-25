import { isDate, isPlainObj } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5d/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []
  Object.entries(params).forEach(entry => {
    let [key, val] = entry
    if (val === null || typeof val === 'undefined') return
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(valIn => {
      if (isDate(valIn)) {
        valIn = valIn.toISOString()
      } else if (isPlainObj(valIn)) {
        valIn = JSON.stringify(valIn)
      }
      parts.push(`${encode(key)}=${encode(valIn)}`)
    })
  })

  let serializedParams = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex > -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') > -1 ? '&' : '?') + serializedParams
  }
  return url
}
