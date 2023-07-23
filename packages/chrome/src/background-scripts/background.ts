import {PortNames} from "lib/src/constants.ts";
import {Message} from "lib/src/messages.ts";

console.log("worker loaded")

// let dndbPort: chrome.runtime.Port
let obrPort: chrome.runtime.Port

// Dndbeyond monsters page listener
chrome.runtime.onConnect.addListener((p) => {
  p.onDisconnect.addListener((p) => {
    console.log("disconnected", p.name)
  })
  console.log("connected", p.name)
  if (p.name !== PortNames.dndbeyond) {
    console.log("not my port", p.name)
    return
  }
  // dndbPort = p

  p.onMessage.addListener((m: Message, p) => {
    console.log("message received", m, p.name)
    obrPort.postMessage(m)
  })
})


// Rodeo Clown Obr extension listener
chrome.runtime.onConnectExternal.addListener((p) => {
  p.onDisconnect.addListener((p) => {
    console.log("disconnected", p.name)
  })
  console.log("connected", p.name)
  if (p.name !== PortNames.obr) {
    console.log("not my port", p.name)
    return
  }
  obrPort = p
})
