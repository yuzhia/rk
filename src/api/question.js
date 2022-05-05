import request from '@/utils/request'

const group_name = 'question'

export default {
  listByPaperId(paperId) {
    return request({
      url: `/${group_name}/list`,
      method: 'get',
      params: { paperId }
    })
  }
}
