import React, { Component } from "react"

import SearchForm from "../forms/SearchForm"
import TabScreen from "../screens/TabScreen"
import { Container } from "@material-ui/core"

class ContentContainer extends Component {
  state = {
    searchQuery: "",
    searchType: 10,
    searchInitiated: false,
    searchText: "Please Enter a SEARCH",
  }

  handleInputChange = (searchQuery) => {
    this.setState({
      searchQuery,
      searchText: "Please initiate the SEARCH",
    })
    if (searchQuery.length === 0) {
      this.setState({
        searchInitiated: false,
        searchText: "Please Enter a SEARCH",
      })
    }
  }

  onSelectChange = (searchType) => {
    console.log(searchType)
    this.setState({
      searchType,
    })
  }

  handleSubmit = (e) => {
    const { searchQuery, searchType, searchInitiated } = this.state
    e.preventDefault()

    console.log("search on Submit:", searchQuery)
    if (searchQuery.length > 0) {
      this.setState({
        searchInitiated: true,
        searchText: "",
      })
    }
    console.log("Search Type: ", searchType)
    console.log("Search initiated: ", searchInitiated)
  }

  render() {
    const { searchQuery, searchType, searchInitiated, searchText } = this.state
    return (
      <Container>
        <SearchForm
          onInputChange={this.handleInputChange}
          onSelectChange={this.onSelectChange}
          onSubmit={this.handleSubmit}
        />
        <TabScreen
          searchQuery={searchQuery}
          searchType={searchType}
          searchInitiated={searchInitiated}
          searchText={searchText}
        />
      </Container>
    )
  }
}

export default ContentContainer
