import React from "react"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"

const Bookshelf = props => {
  return (
    <Flex flexWrap="wrap" pt={120}>
      <Box px={2} py={3} width={1 / 10} />
      <Box px={2} py={3} bg="#faf8ea" width={8 / 10}>
        <Text>{props.text}</Text>
        <Flex flexDirection="row">{props.children}</Flex>
      </Box>
      <Box px={2} py={3} width={1 / 10} />
    </Flex>
  )
}

export default Bookshelf

const Text = styled.p`
  color: #faf8ea;
  text-align: left;
  margin: -55px 0px 0px -8px;

  /* ------------------------------------------------------------------------
  RESPONSIVENESS
  ------------------------------------------------------------------------ */
  /* Smartphones (portrait and landscape) ----------- */
  @media (min-width: 320px) {
    margin: -45px 0px 0px -8px;
  }

  /* iPads ----------- */
  @media (min-width: 768px) {
    margin: -50px 0px 0px -8px;
  }

  /* Desktops and laptops ----------- */
  @media (min-width: 1024px) {
    margin: -55px 0px 0px -8px;
  }

  /* Desktops and laptops ----------- */
  @media (min-width: 1280px) {
    margin: -55px 0px 0px -8px;
  }

  /* Desktops and laptops ----------- */
  @media (min-width: 1300px) {
    margin: -60px 0px 0px -8px;
  }

  /* Large screens ----------- */
  @media (min-width: 1600px) {
    margin: -65px 0px 0px -8px;
  }
`
