/**
 * 存储localStorage
 */
export const setLocalStorage = (key, data) => {
  data = JSON.stringify(data)
  window.localStorage.setItem(key, data)
}

/**
 * 获取localStorage
 */
export const getLocalStorage = key => {
  let data = window.localStorage.getItem(key)
  try {
    if (data) {
      data = JSON.parse(data)
    }
    return data
  } catch (error) {
    return data
  }
}

/**
 * 删除localStorage中的某一项
 */
export const removeLocalStorage = key => {
  window.localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
  window.localStorage.clear()
}
