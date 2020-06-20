import React, { Component } from "react"
import getItems from "../../service/api"
import TabContent from "../tabs/TabContent"

import { Container } from "@material-ui/core"

class TabContentContainer extends Component {
  state = {
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
      <Container>
        <TabContent />
      </Container>
    )
  }
}

export default TabContentContainer
