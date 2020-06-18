import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"

const getStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #2899f3 30%, #f32887 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 120,
    padding: "0 30px",
    position: "relative",
    marginTop: "10px",
  },
  header: {
    fontSize: "42px",
    fontWeight: "bold",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}))

const SearchHeader = () => {
  const classes = getStyles()
  return (
    <Container>
      <Container className={classes.root}>
        <div className={classes.header}>React Movies App</div>
      </Container>
    </Container>
  )
}

export default SearchHeader
