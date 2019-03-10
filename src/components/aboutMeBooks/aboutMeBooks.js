import React from "react"
import Book from "../book/book"
import bio from "./bio.png"
import projects from "./projects.png"
import resume from "./resume.png"
import skills from "./skills.png"
import { Flex, Box } from "@rebass/grid"
import BookWrapper from "../booksWrapper/booksWrapper"

const AboutMeBooks = () => {
  return (
    <BookWrapper>
      <Flex flexDirection="row" flexWrap="wrap">
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={bio} />
          </Book>
        </Box>
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={projects} />
          </Book>
        </Box>
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={resume} />
          </Book>
        </Box>
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={skills} />
          </Book>
        </Box>
      </Flex>
    </BookWrapper>
  )
}

export default AboutMeBooks
