import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import TabContentContainer from "../containers/TabContentContainer"
import TabContent from "../tabs/TabContent"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  box: {
    width: "100%",
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
    searchItems,
    isLoading,
    ...other
  } = props

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
          <TabContent items={props.searchItems} isLoading={props.isLoading} />
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
