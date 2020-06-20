import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Search from "@material-ui/icons/Search"
import Select from "@material-ui/core/Select"

const getStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "400px",
  },
  formControl: {
    marginTop: theme.spacing(1.1),
    marginRight: theme.spacing(1),
    Width: "200px",
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
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
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Search Type
        </InputLabel>
        <Select
          native
          onChange={(e) => props.onSelectChange(e.target.value)}
          label="Search Type"
          inputProps={{
            name: "searchType",
            id: "outlined-age-native-simple",
          }}
        >
          <option key="10" value="10">
            Multi
          </option>
          <option key="20" value="20">
            Movies
          </option>
          <option key="30" value="30">
            TV_Shows
          </option>
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        className={classes.button}
        type="submit"
        size="large"
        color="primary"
        startIcon={<Search />}
      >
        Search
      </Button>
    </form>
  )
}

export default SearchForm
