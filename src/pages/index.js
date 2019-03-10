import React, { Fragment } from "react"
import styled from "styled-components"
import "../styles/styles.css"
import AboutMeBooks from "../components/aboutMeBooks/aboutMeBooks"
import RecommendationBooks from "../components/recommendationBooks/recommendationBooks"
import Footer from "../components/footer/footer"
import Bookshelf from "../components/bookshelf/bookshelf"
import BlogShelf from "../components/blogShelf/blogShelf"

class BlogIndex extends React.Component {
  render() {
    return (
      <Parent>
        <Container>
          {shelves.map((shelf, index) => (
            <Parent key={index}>
              <Bookshelf key={index} text={shelf.text}>
                {shelf.aboutMe ? <AboutMeBooks key={index} /> : <Fragment />}
                {shelf.recommendation ? (
                  <RecommendationBooks key={index} />
                ) : (
                  <Fragment />
                )}
                {shelf.blog ? <BlogShelf key={index} /> : <Fragment />}
              </Bookshelf>
            </Parent>
          ))}
        </Container>
        <Footer />
      </Parent>
    )
  }
}

export default BlogIndex

const Parent = styled.div``

const Container = styled.div`
  background: #272c2f;
  width: 100%;
  height: 1040px;
  padding-top: 50px;
  align-items: center;
  justify-items: center;
`

const shelves = [
  {
    text: "Hi, I’m Tony Faieta.",
  },
  {
    text: "I’m a creative software engineer.",
  },
  {
    text: "You can check out my: ",
    aboutMe: "true",
  },
  {
    text: "Some of my favorite: ",
    recommendation: "true",
  },
  {
    text: "I also write here:",
    latest: "",
    blog: "true",
  },
]
