import {Icon, IconButton} from "@mui/material";
import React from "react";

interface Props {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}
export default function ObrButton(props: Props) {
  const {onClick} = props;
  return (
    <IconButton onClick={onClick}>
      <Icon>
        <img style={{maxWidth: "100%"}} src="https://www.owlbear.rodeo/assets/logo.123af2a3.svg" alt={"add"}/>
      </Icon>
    </IconButton>
  )
}
