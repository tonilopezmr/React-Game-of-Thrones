import * as api from './api'
import * as fakeApi from './fakeApi'

const apiFactory = (debug) => {
  return debug? fakeApi : api
}

export default apiFactory