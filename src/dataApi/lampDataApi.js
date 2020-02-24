import resource from '@/utils/lampRequest'

export function getLampStatus () {
  return resource({
    url: 'list/1',
    method: 'get'
  })
}
