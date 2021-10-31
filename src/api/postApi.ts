import service from '@utils/service'

export const fetch = () =>
  service({ method: 'GET', url: `/repos/duguyihou/Cocococoa/issues` })

export const fetch1 = () =>
  service({ method: 'GET', url: `/repos/duguyihou/Cocococoa/issues` })
