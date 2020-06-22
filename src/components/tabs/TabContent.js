import React from "react"
import { Container } from "@material-ui/core"
import Item from "../listItem/Item"
import Loading from "../layout/Loading"

const TabContent = (props) => {
  const { items, isLoading } = props

  const renderLoadingState = () => <Loading />

  const renderItems = () => {
    return (
      <div className="container">
        <Container>
          {items.map((element) => {
            return (
              <Item
                key={element.id}
                id={element.id}
                title={element.title ? element.title : element.name}
                imageUrl={
                  "http://image.tmdb.org/t/p/w500" + element.poster_path
                }
                popularity={element.popularity}
                releasedDate={element.release_date}
                overview={element.overview}
              />
            )
          })}
        </Container>
      </div>
    )
  }

  const renderContent = () => (isLoading ? renderLoadingState() : renderItems())

  return <Container>{renderContent()}</Container>
}

export default TabContent
