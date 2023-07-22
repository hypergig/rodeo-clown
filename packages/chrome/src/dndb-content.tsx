import React from "react";
import ReactDOM from "react-dom/client";
import {Icon, IconButton} from "@mui/material";

console.log("rodeo clown injected");

const monsters = document.querySelectorAll("div.info")

monsters.forEach((e) => {
  const holder = document.createElement("div")
  e.prepend(holder)
  ReactDOM.createRoot(holder).render(
    <React.StrictMode>
        <IconButton onClick={(e) => {
          e.stopPropagation()
          console.log("clicked")
        }} >
          <Icon>
            <img style={{maxWidth: "100%"}} src="https://www.owlbear.rodeo/assets/logo.123af2a3.svg" alt={"add"}/>
          </Icon>
        </IconButton>
    </React.StrictMode>
  )
})
