import service from '@utils/service'

// eslint-disable-next-line import/prefer-default-export
export const fetch = () =>
  service({ method: 'GET', url: `/repos/duguyihou/salt/issues` })
