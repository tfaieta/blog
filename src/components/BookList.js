import React from 'react'

import Book from './Book'

const strippedTitle = str => str.replace(/^(the|a) /i, '').toLowerCase()

const books = [
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL.jpg",
    url: "https://www.amazon.com/dp/B004J4XGN6/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  },
  {
    title: "Creative Confidence",
    author: "Eric Ries",
    cover: "https://images-na.ssl-images-amazon.com/images/I/41GCOr3aDDL.jpg",
    url: "https://www.amazon.com/Creative-Confidence-Unleashing-Potential-Within-ebook/dp/B00CGI3DWQ/ref=sr_1_3?s=digital-text&ie=UTF8&qid=1530414122&sr=1-3&keywords=creative+confidence",
  },
  {
    title: "Seven Brief Lessons on Physics",
    author: "Carlo Rovelli",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51BLgAn5kVL._SX327_BO1,204,203,200_.jpg",
    url: "https://www.amazon.com/Seven-Brief-Lessons-Physics-Rovelli-ebook/dp/B00Z8VTMYG/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1530414395&sr=1-1&keywords=7+brief+lessons+in+physics",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL.jpg",
    url: "https://www.amazon.com/dp/B004J4XGN6/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  },
  {
    title: "Streampunks: YouTube and the Rebels Remaking Media",
    author: "Robert Kyncl",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51JHRJ9NWZL._SY346_.jpg",
    url: "https://www.amazon.com/Streampunks-YouTube-Rebels-Remaking-Media-ebook/dp/B01LXNJAH9/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1530414452&sr=1-1&keywords=streampunks",
  },
  {
    title: "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants",
    author: "Malcolm Gladwell",
    cover: "https://images-na.ssl-images-amazon.com/images/I/41bkDEJHTdL.jpg",
    url: "https://www.amazon.com/David-Goliath-Underdogs-Misfits-Battling-ebook/dp/B00BAXFAOW/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1530414528&sr=1-1&keywords=david+and+goliath+malcolm+gladwell",
  },
  {
    title: "The Art of Non-Conformity: Set Your Own Rules, Live the Life You Want, and Change the World ",
    author: "Chris Guillebeau",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51e32tSxqSL.jpg",
    url: "https://www.amazon.com/Art-Non-Conformity-Rules-Change-Perigee-ebook/dp/B0042FZWC0/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1530414615&sr=1-1&keywords=the+art+of+non+conformity+by+chris+guillebeau",
  },
  {
    title: "Barbarian Days: A Surfing Life",
    author: "William Finnegan",
    cover: "https://images-na.ssl-images-amazon.com/images/I/514ZYLCzJ8L._SX336_BO1,204,203,200_.jpg",
    url: "https://www.amazon.com/Barbarian-Days-Surfing-William-Finnegan/dp/1594203474/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1530414728&sr=1-1",
  },
];

const list = books
  .map(book => {
    return {
      ...book,
      title: book.title.replace(/ ([^ ]*)$/, '\u00A0$1'),
    }
  })
  .sort((a, b) => strippedTitle(a.title).localeCompare(strippedTitle(b.title)))

export default function BookList() {
  return <div className="library">
    {list.map(({title, author, cover, url}) => (
      <Book
        author={author}
        cover={cover}
        title={title}
        url={url}
        key={title}
      />
      ))}
  </div>
}
