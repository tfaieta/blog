import React from "react"
import Helmet from "react-helmet";
import mdToHTML from '../utils/mdToHTML'

const IndexPage = () => {
    return (
      <div className="center">
          <Helmet
              title="Tony Faieta"
              meta={[
                  { name: "Tony Faieta", content: "Index" },
                  { name: "Faieta", content: "Index" }
              ]}
          />
          <div className="h1">
          <div className="mega sans mxl">
Hi, I'm Tony. I like to design and build software that helps people create interesting and helpful content.
          </div>
            {mdToHTML(`
Right now I am working on a podcasting platform called [Tess](https://tess.fm/), we're an all-in-one podcast solution for creators and we also made a really cool
player for listeners. You can download Tess for iOS [here](https://itunes.apple.com/us/app/tess-podcast-app/id1409521849?ls=1&mt=8) and for Android [here](https://play.google.com/store/apps/details?id=com.tess). I'm also an undergrad CS student at the University of Florida where I like to have conversations with others and write about the things that
make me happy or about topics that are important to me. If you want to have a conversation feel free to tweet at me [@tfaieta](https://twitter.com/tfaieta).
    `)}
          </div>
      </div>)
};

export default IndexPage