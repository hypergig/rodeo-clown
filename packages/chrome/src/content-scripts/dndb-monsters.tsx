import React from "react";
import ReactDOM from "react-dom/client";
import {Token} from "lib/src/messages.ts";
import {PortNames} from "lib/src/constants.ts";
import ObrButton from "./ObrButton.tsx";

console.log("rodeo clown injected");

const port = chrome.runtime.connect({name: PortNames.dndbeyond})
const monsters = document.querySelectorAll("div.info")
monsters.forEach((e) => {

  const name =
    e.querySelector("div.row.monster-name")
      ?.children
      .item(0)
      ?.children
      .item(0)
      ?.innerHTML as string

  const url =
    getComputedStyle(
      e.querySelector("div.row.monster-icon")
        ?.querySelectorAll("div")
        .item(0) as HTMLDivElement
    ).backgroundImage.slice(5, -2)

  ReactDOM.createRoot(e.appendChild(document.createElement("div"))).render(
    <React.StrictMode>
      <ObrButton onClick={(e) => {
        e.stopPropagation()
        port.postMessage(new Token(name, url))
      }}/>
    </React.StrictMode>
  )
})
