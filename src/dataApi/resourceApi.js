import resource from '@/utils/resource'

export function getMenus () {
  return resource({
    url: 'static/local/menus.json',
    method: 'get'
  })
}

export function getMainConfig () {
  return resource({
    url: 'static/local/screen-cfg.json',
    method: 'get'
  })
}

export function getChartOption (fileName) {
  return resource({
    url: 'static/local/' + fileName + '.json',
    method: 'get'
  })
}

export function getMapStyleConfig () {
  return resource({
    url: 'static/custom_map_config_1.json',
    method: 'get'
  })
}

export function getLampPonits () {
  return resource({
    url: 'static/lamp/points.json',
    method: 'get'
  })
}
