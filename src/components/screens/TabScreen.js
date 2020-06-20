import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import SelectBox from "../layout/SelectBox"
import TabContentContainer from "../containers/TabContentContainer"

function TabPanel(props) {
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
  const movieCategory = ["popular", "now_playing", "top_rated", "upcoming"]
  const tvShowCategory = ["airing_today", "on_the_air", "popular", "top_rated"]

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && index === 0 && (
        <Box p={3}>
          <SelectBox category={movieCategory} />
          <TabContentContainer source={"movies"} />
        </Box>
      )}
      {value === index && index === 1 && (
        <Box p={3}>
          <h1>{props.searchText}</h1>
        </Box>
      )}
      {value === index && index === 2 && (
        <Box p={3}>
          <SelectBox category={tvShowCategory} />
          <TabContentContainer source={"TVShows"} />
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  }
}

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
          <LinkTab
            label="MOVIES"
            // href="/drafts"
            {...a11yProps(0)}
            className={classes.tabColor}
          />
          <LinkTab
            label="SEARCH RESULT"
            // href="/trash"
            {...a11yProps(1)}
            className={classes.tabColor}
          />
          <LinkTab
            label="TV SHOWS"
            // href="/spam"
            {...a11yProps(2)}
            className={classes.tabColor}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabPanel}></TabPanel>
      <TabPanel
        value={value}
        index={1}
        className={classes.tabPanel}
        searchQuery={props.searchQuery}
        searchType={props.searchType}
        searchText={props.searchText}
        searchInitiated={props.searchInitiated}
      ></TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}></TabPanel>
    </div>
  )
}

export default TabScreen
