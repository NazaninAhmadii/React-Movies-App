import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function SelectBox(props) {
  const classes = useStyles()
  const rows = []
  for (let i = 0; i < props.category.length; i++) {
    rows.push(
      <option key={i} value={props.category[i]}>
        {props.category[i]}
      </option>
    )
  }

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
        <Select
          native
          onChange={(e) => props.onSelectChange(e.target.value)}
          label="Category"
          inputProps={{
            name: "catrgory",
            id: "outlined-age-native-simple",
          }}
        >
          {rows}
        </Select>
      </FormControl>
    </div>
  )
}
