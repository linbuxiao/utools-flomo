module.exports = {
  message: function(str) {
    utools.showMessageBox({
      message: str
    })
  },
  /**
   * 不可反复调用，容易卡住进程
   * @param {*} str 
   */
  notification: function(str) {
    utools.showNotification(str)
  }
}