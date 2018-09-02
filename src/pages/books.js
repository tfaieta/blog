import React from 'react'
import Helmet from "react-helmet";
import BookList from '../components/BookList'
import mdToHTML from '../utils/mdToHTML'

export default function LibraryPage() {
    
    return <div className="mxl">
        <Helmet
            title="Books"
            meta={[
                { name: "Favorite Books", content: "Blog" },
                { name: "Faieta", content: "Blog" }
            ]}
        />
        <h1>Library</h1>
        {mdToHTML(`
A collection of my favorite books.
    `)}

        <BookList />
        
    </div>
}