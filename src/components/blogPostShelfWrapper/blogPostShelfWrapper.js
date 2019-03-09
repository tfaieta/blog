import React from "react"
import styled from "styled-components"

const BlogPostShelfWrapper = props => {
  return <BPShelfWrapper>{props.children}</BPShelfWrapper>
}

export default BlogPostShelfWrapper

const BPShelfWrapper = styled.div`
  /* ------------------------------------------------------------------------
  RESPONSIVENESS
  ------------------------------------------------------------------------ */
  /* Smartphones (portrait and landscape) ----------- */
  @media (min-width: 320px) {
    margin: -120px 0px 0px 80px;
  }

  /* iPads and half of my computer screen ----------- */
  @media (min-width: 768px) {
    margin: -118px 0px 0px 50px;
  }

  /* Desktops and laptops ----------- */
  @media (min-width: 1024px) {
    margin: -120px 0px 0px 80px;
  }

  /* Desktops and laptops ----------- */
  @media (min-width: 1280px) {
    margin: -120px 0px 0px 80px;
  }

  /* Desktops and laptops ----------- */
  @media (min-width: 1300px) {
    margin: -120px 0px 0px 80px;
  }

  /* Large screens ----------- */
  @media (min-width: 1600px) {
    margin: -120px 0px 0px 80px;
  }
`
