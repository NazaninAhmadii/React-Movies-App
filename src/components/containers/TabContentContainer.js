import React, { Component } from "react"
import getItems from "../../service/api"
import TabContent from "../tabs/TabContent"
import SelectBox from "../layout/SelectBox"
import { Container } from "@material-ui/core"

const movieCategory = ["popular", "now_playing", "top_rated", "upcoming"]
const tvShowCategory = ["popular", "top_rated", "airing_today", "on_the_air"]
class TabContentContainer extends Component {
  state = {
    items: [],
    isLoading: false,
    source: this.props.source || "movie",
    searchQuery: this.props.searchQuery,
    searchType: this.props.searchType || "multi",
    category: "popular",
  }

  componentDidMount() {
    const { source, category } = this.state
    console.log(source, category)
    this.fetchItems()
  }

  onSelectChange = async (category) => {
    console.log("the element selected: ", category)
    await this.setState({
      category,
    })
    this.fetchItems()
  }

  fetchItems = () => {
    const { category, source } = this.state
    const sourceUrl = source + "/" + category
    this.setState({
      isLoading: true,
    })
    console.log("Movie Category: ", sourceUrl)
    getItems(sourceUrl).then(
      (items) => {
        // console.log(items)
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

  searchItems = (e) => {
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
    const { items, isLoading, source } = this.state
    return (
      <Container>
        {source === "movie" ? (
          <SelectBox
            category={movieCategory}
            onSelectChange={this.onSelectChange}
          />
        ) : null}
        {source === "tv" ? (
          <SelectBox
            category={tvShowCategory}
            onSelectChange={this.onSelectChange}
          />
        ) : null}
        <TabContent items={items} isLoading={isLoading} />
      </Container>
    )
  }
}

export default TabContentContainer
