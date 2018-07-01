import React from 'react'
import BookList from '../components/BookList'
import mdToHTML from '../utils/mdToHTML'

export default function PodcastPage() {
    return <div className="mxl">
        <h1>Podcasts</h1>
        {mdToHTML(`
I would say I'm obsessed with podcasts and I get asked quite often which ones are my
favorite. Below is a list of podcasts that I like enough to share with the world.
 This list is always being updated and is to serve as somewhere to go to if you
 ever need a podcast recommendation. I love when people recommend podcasts to me, so
 if you want to recommend me one feel free to tweet me [@tfaieta](https://twitter.com/tfaieta)
    `)}
        <BookList />
    </div>
}