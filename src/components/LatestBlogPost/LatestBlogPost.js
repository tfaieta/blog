import React from 'react'
import styled from 'styled-components'
import Latest from './Latest.png'

const LatestBlogPost = () => {
  return (
    <ButtonWrapper>
      <img src={Latest} />
    </ButtonWrapper>
  )
}

export default LatestBlogPost

const ButtonWrapper = styled.button`
  position: absolute;
  bottom: 43px;
  left: 220px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 150ms linear;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  img {
    height: 150px;
  }

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
