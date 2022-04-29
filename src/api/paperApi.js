import request from '@/utils/request'

const group_name = 'paper'

export default {
  listBySubjectId(subjectId) {
    return request({
      url: `/${group_name}/listBySubjectId`,
      method: 'get',
      params: { subjectId }
    })
  }
}
