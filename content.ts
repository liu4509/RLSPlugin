import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://riderx-l3b.jing-chi.com/*"]
  // matches: ["https://riderx-l3.jing-chi.com/*"]
}
// 触发事件
document.addEventListener("keypress", keyboard)
function paiZiFun(paiZhi) {
  paiZhi[0].dispatchEvent(boxClick)
  paiZhi[0].dispatchEvent(boxClick)
}
function A(key, box) {
  // 判断是否是绑定的键
  if (key == "g") {
    // 事件派发
    console.log(key)
    box[0].dispatchEvent(boxClick)
  }
  if (key == "h") {
    // 事件派发
    console.log(key)
    box[1].dispatchEvent(boxClick)
  }
}
// 回调
async function keyboard(eve) {
  // 提取点击的键
  let x = eve.keyCode || eve.which
  let key = String.fromCharCode(x)
  //
  // const newPaiZi = new Promise((resolve, reject) => {
  //   paiZiFun(paiziClick)
  // })
  let paiziClick = document.querySelectorAll(
    ".src-components-AppBar-AppBarIcon-module__appbar_icon_container--2RT8u"
  )
  let box = document.querySelectorAll(".ant-checkbox-input")

  if (box[1] == undefined) {
    await paiZiFun(paiziClick)
  }

  await A(key, box)
}
var boxClick = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  view: window
})
