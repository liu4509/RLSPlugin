import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://riderx-l3.jing-chi.com/*"]
}
// 触发事件
document.addEventListener("keypress", keyboard)
// 回调
function keyboard(eve) {
  // 提取点击的键
  let x = eve.keyCode || eve.which
  let key = String.fromCharCode(x)
  // 判断是否是绑定的键
  if (key == "f") {
    // console.log("f");
    // let lab = document.querySelector(".ant-checkbox-input")
    // lab.click()
  }
}
