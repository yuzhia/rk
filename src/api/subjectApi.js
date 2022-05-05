import request from '@/utils/request'

const group_name = 'subject'

export default {
  list() {
    return request({
      url: `/${group_name}/list`,
      method: 'get'
    })
  }
}
