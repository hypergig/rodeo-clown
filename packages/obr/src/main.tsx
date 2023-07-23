import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import OBR, {buildImage} from "@owlbear-rodeo/sdk";
import {PortNames} from "lib/src/constants.ts";
import {Token} from "lib/src/messages.ts";

const extensionID = "acbjjhakdojoippikmijpnkphjimkmai"


OBR.onReady(async () => {
  const port = chrome.runtime.connect(extensionID, {name: PortNames.obr})
  console.log("connected", port.name)
  port.onDisconnect.addListener((p) => {
    console.log("disconnected", p.name)
  })

  port.onMessage.addListener((m: Token, p) => {
    console.log("received message", p.name, m)

    const item = buildImage(
      {
        height: 300,
        width: 300,
        url: m.url,
        mime: "image/png",
      },
      {dpi: 300, offset: {x: 150, y: 150}}
    )
      .plainText(m.name)
      .build()
    OBR.scene.items.addItems([item])
  })
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
