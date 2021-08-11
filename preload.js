import src from "./src"

window.exports = {
  "flomo": { // 注意：键对应的是 plugin.json 中的 features.code
     mode: "none",  // 用于无需 UI 显示，执行一些简单的代码
     args: src
  }
}