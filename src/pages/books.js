import React from 'react'

import BookList from '../components/BookList'
import mdToHTML from '../utils/mdToHTML'

export default function LibraryPage() {
    return <div className="mxl">
        <h1>Library</h1>
        {mdToHTML(`
A collection of my favorite books.
    `)}

        <BookList />
    </div>
}