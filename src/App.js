import React from "react"
import "./App.css"

import Container from "@material-ui/core/Container"
import Header from "./components/layout/Header"
import ContentContainer from "./components/containers/ContentContainer"

function App() {
  return (
    <Container fixed>
      <Header />

      <ContentContainer />
    </Container>
  )
}

export default App
