import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Pagination from "@material-ui/lab/Pagination"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(10),
      position: "relative",
    },
  },
  pagination: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
  },
}))

export default function BasicPagination({
  itemsPerPage,
  totalItems,
  paginate,
}) {
  const classes = useStyles()
  const itemNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    itemNumbers.push(i)
  }
  //   console.log("total page in pagination: ", totalItems)
  return (
    <div className={classes.root}>
      <Pagination
        count={totalItems}
        color="primary"
        onChange={(e, currentPage) => paginate(currentPage)}
        className={classes.pagination}
      />
    </div>
  )
}
