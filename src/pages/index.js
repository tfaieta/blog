import React from "react"
import styled from "styled-components"
import "../styles/styles.css"
import AboutMeBooks from "../components/aboutMeBooks/aboutMeBooks"
import RecommendationBooks from "../components/recommendationBooks/recommendationBooks"
import BlogBooks from "../components/blogBooks/blogBooks"
import LatestBlogPost from "../components/latestBlogPost/latestBlogPost"
import Footer from "../components/footer/footer"
import Bookshelf from "../components/bookshelf/bookshelf"

class BlogIndex extends React.Component {
  render() {
    return (
      <Parent>
        <Container>
          {shelves.map((shelf, index) => (
            <Parent>
              <Bookshelf key={index} text={shelf.text}>
                {shelf.aboutMe ? (
                  <AboutMeBooksWrapper>
                    <AboutMeBooks />
                  </AboutMeBooksWrapper>
                ) : (
                  <React.Fragment />
                )}
                {shelf.recommendation ? (
                  <RecommendationsBooksWrapper>
                    <RecommendationBooks />
                  </RecommendationsBooksWrapper>
                ) : (
                  <React.Fragment />
                )}
                {shelf.blog ? (
                  <BlogBooksWrapper>
                    <LatestBlogPost />
                    <BlogBooks />
                  </BlogBooksWrapper>
                ) : (
                  <React.Fragment />
                )}
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
  height: 1000px;
  padding-top: 50px;
  align-items: center;
  justify-items: center;
`

const AboutMeBooksWrapper = styled.div`
  margin: -120px 0px 0px 20px;
`

const RecommendationsBooksWrapper = styled.div`
  margin: -120px 0px 0px 20px;
`
const BlogBooksWrapper = styled.div`
  margin: -120px 0px 0px 200px;
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
