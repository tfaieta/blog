import React from "react"
import styled from "styled-components"

const BookWrapper = props => {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.div`
  /* ------------------------------------------------------------------------
  RESPONSIVENESS
  ------------------------------------------------------------------------ */

  /* DONE */
  /* Smartphones (portrait and landscape) ----------- */
  @media (min-width: 320px) {
    margin: -120px 0px 0px -90px;

    img {
      max-width: 13%;
      height: auto;
    }
  }

  /* DONE */
  /* Half my screen ----------- */
  @media (min-width: 768px) {
    margin: -118px 0px 0px -50px;

    img {
      max-width: 13%;
      height: auto;
    }
  }

  /* DONE */
  /* 3/4 my screen ----------- */
  @media (min-width: 1024px) {
    margin: -120px 0px 0px -30px;

    img {
      max-width: 13%;
      height: auto;
    }
  }

  /* DONE */
  /* My whole screen  ----------- */
  @media (min-width: 1280px) {
    margin: -125px 0px 0px -10px;

    img {
      max-width: 13%;
      height: auto;
    }
  }

  /* DONE */
  /* My monitor screen ----------- */
  @media (min-width: 1600px) {
    margin: -125px 0px 0px 50px;

    img {
      max-width: 13%;
      height: auto;
    }
  }
`

export default BookWrapper
