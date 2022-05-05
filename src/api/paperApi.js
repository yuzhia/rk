import request from '@/utils/request'

const group_name = 'paper'

export default {
  listBySubjectId(subjectId) {
    return request({
      url: `/${group_name}/list`,
      method: 'get',
      params: { subjectId }
    })
  }
}
