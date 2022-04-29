import request from '@/utils/request'

const group_name = 'subject'

export default {
  listByLevel(id) {
    return request({
      url: `/${group_name}/listByLevel`,
      method: 'get',
      params: { id }
    })
  }
}
