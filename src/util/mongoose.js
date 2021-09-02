
module.exports = {
  multiMgToObject: function(mgArr) {
    return mgArr.map(item => item.toObject())
  },
  singleMgToObject: function(mg) {
    return mg.toObject()
  }
}
