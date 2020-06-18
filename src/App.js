import React from "react"
import "./App.css"

import Container from "@material-ui/core/Container"
import SearchHeader from "./components/layout/Header"
import TabScreen from "./components/screens/TabScreen"

function App() {
  return (
    <Container fixed>
      <SearchHeader />
      <TabScreen />
    </Container>
  )
}

export default App
