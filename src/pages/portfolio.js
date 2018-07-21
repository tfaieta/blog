import React from 'react'
import mdToHTML from '../utils/mdToHTML'
import Helmet from "react-helmet";

export default function PortfolioPage() {
    return (
        <div>
        <Helmet
                title="Portfolio"
                meta={[
                    { name: "Tony Faieta's Portfolio", content: "Blog" },
                    { name: "Faieta", content: "Blog" }
                ]}
        />
        <div className="mxl">
        <h1>Portfolio</h1>
        {mdToHTML
        (`
Things that make me happy to have made/been involved in. Resume on request.
&nbsp
# [Tess](http://tess.fm)
A software company that focuses on making products for podcast listeners and creators. I started Tess with my cofounder Nick (both technichal) out of a love for audio and podcasts.

##### The Issue:
Users should be able to create quality podcasts from their phones. We also noticed that there were many barriers to entry to maintain a podcast (high cost of hosting + distribution), we thought that this was holding back podcasting in general. We also wanted to make a podcast player that makes us really happy and enhances browsing and sharing features.

##### My Role:
I focused on front-end engineering and design of the UI/UX, also I led all decisions when it came to the product directions as I spent time interviewing users and podcast creators. Built my first design system as well!

##### Output:
Tess podcasting app in both [iOS](https://itunes.apple.com/us/app/tess-podcast-app/id1409521849?ls=1&mt=8) & [Android](https://play.google.com/store/apps/details?id=com.tess). Soon more to come! =)`)}
        </div>
        </div>)
}