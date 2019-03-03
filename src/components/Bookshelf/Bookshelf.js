import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

const Bookshelf = props => {
  return (
    <Flex flexWrap="wrap" pt={120}>
      <Box px={2} py={3} width={1 / 10} />
      <Box px={2} py={3} bg="#faf8ea" width={8 / 10}>
        <Text>{props.text}</Text>
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
`
