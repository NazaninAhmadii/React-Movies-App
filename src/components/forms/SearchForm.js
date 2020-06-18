import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

const getStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))

const SearchForm = (props) => {
  const classes = getStyles()
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <TextField
        label="Search"
        name="searchQuery"
        className={classes.textField}
        margin="normal"
        onChange={(e) => props.onInputChange(e.target.value)}
        variant="outlined"
      />
      <Button variant="outlined" className={classes.button} type="submit">
        Search
      </Button>
    </form>
  )
}

export default SearchForm
