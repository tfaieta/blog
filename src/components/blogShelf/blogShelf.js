import React from "react"
import BlogPostShelfWrapper from "../blogPostShelfWrapper/BlogPostShelfWrapper"
import LatestBlogPost from "../latestBlogPost/latestBlogPost"
import BlogBooks from "../blogBooks/blogBooks"

const BlogShelf = () => {
  return (
    <BlogPostShelfWrapper>
      <LatestBlogPost />
      <BlogBooks />
    </BlogPostShelfWrapper>
  )
}

export default BlogShelf
