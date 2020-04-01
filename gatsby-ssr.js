import React from "react"
import GlobalContext from "./src/context/GlobalState"

export const wrapRootElement = GlobalContext

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key={3 * Math.random()}
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />,
  ])
}
