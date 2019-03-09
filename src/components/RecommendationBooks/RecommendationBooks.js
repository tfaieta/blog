import React from "react"
import styled from "styled-components"
import Book from "../book/book"
import blogs from "./blogs.png"
import books from "./books.png"
import podcasts from "./podcasts.png"
import { Flex, Box } from "@rebass/grid"

const RecommendationBooks = () => {
  return (
    <Wrapper>
      <Flex flexDirection="row" flexWrap="wrap">
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={blogs} />
          </Book>
        </Box>
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={books} />
          </Book>
        </Box>
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={podcasts} />
          </Book>
        </Box>
      </Flex>
    </Wrapper>
  )
}

export default RecommendationBooks

const Wrapper = styled.div`
  img {
    max-width: 13%;
    height: auto;
  }
`
