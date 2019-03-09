import React from "react"
import styled from "styled-components"
import Book from "../book/book"
import bookOne from "./2019.png"
import bookTwo from "./2018.png"
import { Flex, Box } from "@rebass/grid"

const BlogBooks = () => {
  return (
    <Wrapper>
      <Flex flexDirection="row" flexWrap="wrap">
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={bookOne} />
          </Book>
        </Box>
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={bookTwo} />
          </Book>
        </Box>
      </Flex>
    </Wrapper>
  )
}

export default BlogBooks

const Wrapper = styled.div`
  img {
    max-width: 13%;
    height: auto;
  }
`
