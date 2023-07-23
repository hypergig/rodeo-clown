import React from "react";
import ReactDOM from "react-dom/client";
import {Icon, IconButton} from "@mui/material";
import {Token} from "./messages.ts";
import {portName} from "./constants.ts";

console.log("rodeo clown injected");


const port = chrome.runtime.connect({name: portName})

const monsters = document.querySelectorAll("div.info")

monsters.forEach((e) => {
  const name = e.querySelector("div.row.monster-name")?.children.item(0)?.children.item(0)?.innerHTML as string
  const icon = e.querySelector("div.row.monster-icon")?.children.item(0)


  const href = (icon as HTMLAnchorElement).href
  const background = getComputedStyle(icon as HTMLDivElement).backgroundImage.slice(5,-2)
  const url = href ? href : background


  const holder = document.createElement("div")
  e.appendChild(holder)
  ReactDOM.createRoot(holder).render(
    <React.StrictMode>
        <IconButton sx={{flex: "inline"}} onClick={(e) => {
          e.stopPropagation()
          port.postMessage(new Token(name, url))
        }} >
          <Icon>
            <img style={{maxWidth: "100%"}} src="https://www.owlbear.rodeo/assets/logo.123af2a3.svg" alt={"add"}/>
          </Icon>
        </IconButton>
    </React.StrictMode>
  )
})
