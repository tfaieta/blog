import React from "react"
import BlogPostShelfWrapper from "../blogPostShelfWrapper/BlogPostShelfWrapper"
import LatestBlogPost from "../latestBlogPost/latestBlogPost"
import BlogBooks from "../blogBooks/blogBooks"

const BlogShelf = () => {
  return (
    <BlogPostShelfWrapper>
      <LatestBlogPost>
        <BlogBooks />
      </LatestBlogPost>
    </BlogPostShelfWrapper>
  )
}

export default BlogShelf
