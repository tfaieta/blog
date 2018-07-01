import React from 'react'
import mdToHTML from '../utils/mdToHTML'


// Might want to add a sidebar here with your skills

export default function PortfolioPage() {
    return <div className="mxl">
        <h1>Portfolio</h1>
        {mdToHTML(`
A collection of my tiny wins in design and development. Hoping that it could help to inspire others, if you
are a recruiter/startup, feel free to reach out to <tfaieta@gmail.com>.
    `)}
    </div>
}