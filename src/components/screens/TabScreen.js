import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import TabPanel from "../tabs/TabPanel"

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
    borderRadius: 3,
    border: "2px solid #f5f5f5",
    boxShadow: "0 3px 5px 2px rgba(245, 245, 245, .3)",
  },
  tabColor: {
    backgroundColor: "#017eff",
  },
  tabPanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}))

function TabScreen(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="MOVIES" className={classes.tabColor} />
          <LinkTab label="SEARCH RESULT" className={classes.tabColor} />
          <LinkTab label="TV SHOWS" className={classes.tabColor} />
        </Tabs>
      </AppBar>
      <TabPanel
        value={value}
        className={classes.tabPanel}
        searchQuery={props.searchQuery}
        searchType={props.searchType}
        searchText={props.searchText}
        searchInitiated={props.searchInitiated}
        searchItems={props.searchItems}
        isLoading={props.isLoading}
      ></TabPanel>
    </div>
  )
}

export default TabScreen
