
export const deepCopy = function (target, map = new Map()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}

    if (map.get(target)) {
      console.log('s');
      return target
    } else {
      map.set(target, cloneTarget)
    }

    for (const key in target) {
      cloneTarget[key] = deepCopy(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }

}

function deep (target) {
  //先判断是否为对象
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}

    for (const key in target) {
      cloneTarget[key] = deep(target[key])
    }
    return cloneTarget
  } else {
    return target
  }

}
