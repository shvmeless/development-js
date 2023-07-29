import * as recordIteratorAsync from './utils/record-iterator-async'
import * as recordIterator from './utils/record-iterator'
import * as recordUtils from './utils/record'

export const record = {
  ...recordUtils,
  ...recordIterator,
  async: { ...recordIteratorAsync },
}
