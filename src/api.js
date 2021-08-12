module.exports = {
  enter: () => {
    let inputValue = ""
    utools.setSubInput(({ text }) => {
      inputValue = text
    }, "请输入你的api地址")

    const saveApi = (e) => {
      if (+e.which === 13) {
        // 将api地址保存到本地
        utools.dbStorage.setItem("api", inputValue)
        utools.setSubInputValue("api地址已保存")

        document.removeEventListener('keydown', saveApi)
      }
    }

    document.addEventListener('keydown', saveApi)
  },
}