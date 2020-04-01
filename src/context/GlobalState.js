import React, { createContext, useReducer } from "react"
import MuiGlobalTheme from "./MuiTheme"
import { CssBaseline } from "@material-ui/core"

export const GlobalState = createContext()
export const GlobalDispatch = createContext()

const initialState = {
  dropdown: {},
}

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error("u stupid! correct the fckin code!")
  }
}

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalState.Provider value={state}>
      <GlobalDispatch.Provider value={dispatch}>
        <MuiGlobalTheme>
          <CssBaseline />
          {children}
        </MuiGlobalTheme>
      </GlobalDispatch.Provider>
    </GlobalState.Provider>
  )
}

export default ({ element }) => <GlobalContext>{element}</GlobalContext>
