import axios from "axios"


export default  {
  enter: () => {
    let inputValue = ""
    utools.setSubInput(({ text }) => {
      inputValue = text
    }, "请输入你想输入的")
    document.addEventListener('keydown', e => {
      if (+e.which === 13) {
        axios.post("https://flomoapp.com/iwh/NzEwMA/7c8fcd9e5f4d1e9387dc3d3e260ceca8/", {
          content: inputValue
        }).then(res => {
          utools.showNotification(res.data.message)
          utools.outPlugin()
        })
      }
    })
  }
}