import React, { Component } from "react"
import getItems from "../../service/api"
import TabContent from "../tabs/TabContent"
import SelectBox from "../layout/SelectBox"
import { Container } from "@material-ui/core"

import BasicPagination from "../layout/Pagination"

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
    totalPage: 1,
    page: 1,
    currentPage: 1,
    indexOfLastItem: 10,
    indexOfFirstItem: 0,
    itemPerPage: 10,
    currentItems: [],
  }

  componentDidMount() {
    const { page } = this.state

    // console.log(source, category)
    this.fetchItems(page)
  }

  onSelectChange = async (category) => {
    const { currentPage } = this.state
    // console.log("the element selected: ", category)
    await this.setState({
      category,
      currentPage: 1,
    })
    this.fetchItems(currentPage)
  }

  fetchItems = (page) => {
    const { category, source, indexOfFirstItem, indexOfLastItem } = this.state
    const sourceUrl = source + "/" + category
    this.setState({
      isLoading: true,
    })
    // console.log("Movie Category: ", sourceUrl)
    getItems(sourceUrl, page).then(
      (items) => {
        // console.log("totalPage : ", items.total_pages)
        this.setState({
          items: items.results,
          isLoading: false,
          totalPage: Math.floor(items.total_pages * 2),
          currentItems: items.results.slice(indexOfFirstItem, indexOfLastItem),
        })
      },
      (error) => {
        console.log("Error ", `Something went wrong! ${error}`)
      }
    )
  }

  render() {
    const {
      items,
      isLoading,
      source,
      totalPage,
      currentItems,
      itemPerPage,
    } = this.state

    //add pagination
    // console.log("totalPage : ", totalPage)
    const paginate = async (currPage) => {
      await this.setState({
        page: Math.ceil(currPage / 2),
        currentPage: currPage,
        indexOfLastItem: currPage % 2 === 1 ? 10 : 20,
        indexOfFirstItem: currPage % 2 === 1 ? 0 : 10,
        currentItems: items.slice(
          currPage % 2 === 1 ? 10 : 20,
          currPage % 2 === 1 ? 0 : 10
        ),
      })

      this.fetchItems(Math.ceil(currPage / 2))
    }

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
        <TabContent items={currentItems} isLoading={isLoading} />
        <BasicPagination
          itemsPerPage={itemPerPage}
          totalItems={totalPage}
          paginate={paginate}
        />
      </Container>
    )
  }
}

export default TabContentContainer
