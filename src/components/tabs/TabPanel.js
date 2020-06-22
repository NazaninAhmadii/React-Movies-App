import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
// import SelectBox from "../layout/SelectBox"
import TabContentContainer from "../containers/TabContentContainer"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}))

function TabPanel(props) {
  const classes = useStyles()
  const {
    children,
    value,
    index,
    searchInitiated,
    searchText,
    searchQuery,
    searchType,
    ...other
  } = props
  // const movieCategory = ["popular", "now_playing", "top_rated", "upcoming"]
  // const tvShowCategory = ["popular", "top_rated", "airing_today", "on_the_air"]
  // let selectedCategory

  // const onSelectChange = (e) => {
  //   selectedCategory = e
  //   console.log(selectedCategory)
  // }

  return (
    <div
      role="tabpanel"
      className={classes.root}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === 0 && (
        <Box p={3} className={classes.box}>
          <TabContentContainer source={"movie"} />
        </Box>
      )}
      {value === 1 && (
        <Box p={3} className={classes.box}>
          <h1>{props.searchText}</h1>
          <TabContentContainer source={searchType} />
        </Box>
      )}
      {value === 2 && (
        <Box p={3} className={classes.box}>
          <TabContentContainer source={"tv"} />
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
}

export default TabPanel
