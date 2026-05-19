import { iconSet } from './constants'

export function parseText(text: string) {
  const regex = /\b[a-z]+\b/gi

  const tokens = []
  let lastIndex = 0

  for (const match of text.matchAll(regex)) {
    const start = match.index
    const end = start + match[0].length
    const value = match[0].toLowerCase()

    if (start > lastIndex) {
      tokens.push({
        type: 'text',
        value: text.slice(lastIndex, start),
      })
    }

    if (iconSet.has(value)) {
      tokens.push({
        type: 'icon',
        value,
      })
    } else {
      tokens.push({
        type: 'text',
        value: match[0],
      })
    }

    lastIndex = end
  }

  if (lastIndex < text.length) {
    tokens.push({
      type: 'text',
      value: text.slice(lastIndex),
    })
  }

  return tokens
}
