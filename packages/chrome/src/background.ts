import {Message} from "./messages.ts";
import {portName} from "./constants.ts";

console.log("worker loaded")

chrome.runtime.onConnect.addListener((p) => {
  p.onDisconnect.addListener((p) => {
    console.log("disconnected", p.name)
  })
  console.log("connected", p.name)
  if (p.name !== portName) {
    console.log("not my port", p.name)
    return
  }

  p.onMessage.addListener((m: Message, p) => {
    console.log("message received", m, p.name)
  })
})
