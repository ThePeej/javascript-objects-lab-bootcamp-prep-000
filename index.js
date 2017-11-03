function Objects() {
  var recipes = {}
  return recipes
}


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
