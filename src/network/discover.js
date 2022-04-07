import request from '@/utils/request.js'

/**
 * 获取轮播图
 */
export function _getBanner () {
  return request({
    url: '/banner'
  })
}

/**
 * 获取推荐歌单
 */
export function _getPersonalized (config) {
  return request({
    url: '/personalized',
    params: {
      limit: config
    }
  })
}

/**
 * 获取独家放送
 */
export function _getPrivateContent () {
  return request({
    url: '/personalized/privatecontent'
  })
}

/**
 * 获取推荐新音乐
 */
export function _getNewSong () {
  return request({
    url: '/personalized/newsong'
  })
}

/**
 * 获取最新歌曲
 */
export function _getTopSongs (type) {
  return request({
    url: '/top/song',
    params: { type }
  })
}

/**
 * 获取推荐播客
 */
export function _getPersonalizedDj () {
  return request({
    url: '/personalized/djprogram'
  })
}

/**
 * 获取推荐播客
 */
export function _getDaySongs () {
  return request({
    url: '/recommend/songs'
  })
}

/**
 * 推荐MV
 */
export function _getPersonalizedMv () {
  return request({
    url: '/personalized/mv'
  })
}
