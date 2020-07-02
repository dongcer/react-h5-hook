
let a = [1, 1, 2]
const deepCopy = function (target, map = new Map()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}

    if (map.get(target)) {
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
deepCopy(a)