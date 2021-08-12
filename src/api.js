module.exports = {
  enter: () => {
    let inputValue = ""
    utools.setSubInput(({ text }) => {
      inputValue = text
    }, "请输入你的api地址")
    document.addEventListener('keydown', e => {
      if (+e.which === 13) {
        // 将api地址保存到本地
        utools.dbStorage.setItem("api", inputValue)
        utools.showNotification("api地址已保存")
        utools.outPlugin()
      }
    })
  }
}