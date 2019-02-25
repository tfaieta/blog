import React from 'react'
import styled from 'styled-components'

const Book = props => <Wrapper>{props.children}</Wrapper>

export default Book

const Wrapper = styled.button`
  width: 40px;
  overflow: none;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 150ms linear;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    transition: all 150ms linear;
    opacity: 0.85;
  }
  &:active {
    transition: all 150ms linear;
    opacity: 0.55;
  }

  &:focus {
    outline: none;
  }
`
