import {Message} from "./messages.ts";
import {portName} from "./constants.ts";

console.log("worker loaded")

// let dndbPort: chrome.runtime.Port
let obrPort: chrome.runtime.Port

chrome.runtime.onConnect.addListener((p) => {
  p.onDisconnect.addListener((p) => {
    console.log("disconnected", p.name)
  })
  console.log("connected", p.name)
  if (p.name !== portName) {
    console.log("not my port", p.name)
    return
  }
  // dndbPort = p

  p.onMessage.addListener((m: Message, p) => {
    console.log("message received", m, p.name)
    obrPort.postMessage(m)
  })
})


chrome.runtime.onConnectExternal.addListener((p) => {
  p.onDisconnect.addListener((p) => {
    console.log("disconnected", p.name)
  })
  console.log("connected", p.name)
  if (p.name !== portName) {
    console.log("not my port", p.name)
    return
  }
  obrPort = p
})
