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
        {mdToHTML(`
A collection of my tiny wins in design and development. Hoping that it could help to inspire others, if you
are a recruiter/startup, feel free to reach out to <tfaieta@gmail.com>. This page is in development.
    `)}
        </div>
        </div>)
}