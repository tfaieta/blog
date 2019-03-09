import React from "react"
import styled from "styled-components"

const BookWrapper = props => {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.div`
  /* ------------------------------------------------------------------------
  RESPONSIVENESS
  ------------------------------------------------------------------------ */
  /* Smartphones (portrait and landscape) ----------- */
  @media (min-width: 320px) {
    margin: -120px 0px 0px 80px;

    img {
      max-width: 13%;
      height: auto;
    }
  }

  /* iPads ----------- */
  @media (min-width: 768px) {
    margin: -120px 0px 0px 80px;

    img {
      max-width: 13%;
      height: auto;
    }
  }

  /* Desktops and laptops ----------- */
  @media (min-width: 1024px) {
    margin: -120px 0px 0px 80px;

    img {
      max-width: 13%;
      height: auto;
    }
  }

  /* Desktops and laptops ----------- */
  @media (min-width: 1280px) {
    margin: -120px 0px 0px 80px;

    img {
      max-width: 14%;
      height: auto;
    }
  }

  /* Desktops and laptops ----------- */
  @media (min-width: 1300px) {
    margin: -120px 0px 0px 80px;

    img {
      max-width: 13%;
      height: auto;
    }
  }

  /* Large screens ----------- */
  @media (min-width: 1600px) {
    margin: -120px 0px 0px 80px;

    img {
      max-width: 13%;
      height: auto;
    }
  }
`

export default BookWrapper
