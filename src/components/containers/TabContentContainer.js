import React, { Component } from "react"
import SearchForm from "../forms/SearchForm"
import getItems from "../../service/api"

class TabContentContainer extends Component {
  state = {
    searchQuery: "",
    itemData: {},
    items: [],
    isLoading: false,
    source: this.props.source || "movies",
  }

  fetchItems = (e) => {
    const { searchQuery } = this.state
    e.preventDefault()

    this.setState({
      isLoading: true,
    })

    getItems(searchQuery).then(
      (items) => {
        console.log(items)
        this.setState({
          items,
          isLoading: false,
        })
      },
      (error) => {
        alert("Error ", `Something went wrong! ${error}`)
      }
    )
  }

  render() {
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
}

export default TabContentContainer
