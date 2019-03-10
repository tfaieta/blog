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
    margin: -120px 0px 0px 40px;
  }

  /* Half my screen ----------- */
  @media (min-width: 768px) {
    margin: -118px 0px 0px 50px;
  }

  /* 3/4 my screen ----------- */
  @media (min-width: 1024px) {
    margin: -120px 0px 0px 80px;
  }

  /* My whole screen  ----------- */
  @media (min-width: 1280px) {
    margin: -125px 0px 0px 80px;
  }

  /* My monitor screen ----------- */
  @media (min-width: 1600px) {
    margin: -125px 0px 0px 120px;
  }
`
