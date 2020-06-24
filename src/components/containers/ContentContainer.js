import React, { Component } from "react"

import SearchForm from "../forms/SearchForm"
import TabScreen from "../screens/TabScreen"
import { Container } from "@material-ui/core"
import searchItems from "../../service/searchapi"

class ContentContainer extends Component {
  state = {
    searchItems: [],
    isLoading: false,
    searchQuery: "",
    searchType: "multi",
    searchInitiated: false,
    searchText: "Please Enter a SEARCH",
  }

  handleInputChange = (searchQuery) => {
    this.setState({
      searchQuery,
      searchText: "Please initiate the SEARCH ...",
    })
    if (searchQuery.length === 0) {
      this.setState({
        searchInitiated: false,
        searchText: "Please Enter a SEARCH",
      })
    }
  }

  onSelectChange = async (searchType) => {
    console.log(searchType)
    await this.setState({
      searchType,
    })
  }

  handleSubmit = (e, page) => {
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
    const searchUrl = "search/" + searchType
    searchItems(searchUrl, searchQuery).then(
      (searchItems) => {
        console.log(searchItems)
        this.setState({
          searchItems: searchItems.results,
          isLoading: false,
        })
        if (searchItems.length === 0) {
          this.setState({
            searchText: "Sorry, there were no results",
          })
        }
      },
      (error) => {
        console.log("Error ", `Something went wrong! ${error}`)
      }
    )
  }

  render() {
    const {
      searchQuery,
      searchType,
      searchInitiated,
      searchText,
      isLoading,
      searchItems,
    } = this.state

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
          searchItems={searchItems}
          isLoading={isLoading}
        />
      </Container>
    )
  }
}

export default ContentContainer
