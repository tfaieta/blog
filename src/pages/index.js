import React from "react"
import Helmet from "react-helmet";
import mdToHTML from '../utils/mdToHTML'

const IndexPage = () => {
    return (
      <div>
          <Helmet
              title="Tony Faieta"
              meta={[
                  { name: "Tony Faieta", content: "Index" },
                  { name: "Faieta", content: "Index" }
              ]}
          />
          <div className="h1">
          <div className="mega sans mxl">
Hi, I'm Tony. I like to design and build software that break down barriers for people to create and help others.
          </div>
            {mdToHTML(`
Right now I am working on my startup called [Tess](https://tess.fm/), we're an all-in-one podcast solution for creators and we also made a really cool
player for listeners. I'm also an undergrad CS student at the University of Florida. I like to have conversations with others, so feel free
to tweet at me [@tfaieta](https://twitter.com/tfaieta).
    `)}
          </div>
      </div>)
};

export default IndexPage