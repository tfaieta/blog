import React from 'react'
import Podcast from './Podcast'

const strippedTitle = str => str.replace(/^(the|a) /i, '').toLowerCase()

const podcasts = [
    {
        title: "Masters of Scale",
        author: "WaitWhat Media",
        cover: "https://content.production.cdn.art19.com/images/26/72/78/e3/267278e3-d103-42af-85f8-ab90ce316661/3156a418f4db34f8c868fc8f8ebed16712a6cca272361cdd5ce4faf54cb503b630594dc6b08a5b696b84af25dd6603e2fbec63fd7f45c9860f759bf466a68bbf.jpeg",
        url: "https://mastersofscale.com/",
    },
    {
        title: "The Daily",
        author: "The New York Times",
        cover: "https://content.production.cdn.art19.com/images/01/1b/f3/d6/011bf3d6-a448-4533-967b-e2f19e376480/7fdd4469c1b5cb3b66aa7dcc9fa21f138efe9a0310a8a269f3dcd07c83a552844fcc445ea2d53db1e55d6fb077aeaa8a1566851f8f2d8ac4349d9d23a87a69f5.jpeg",
        url: "https://www.nytimes.com/podcasts/the-daily",
    },
    {
        title: "Startup (Season 1)",
        author: "Gimlet Media",
        cover: "https://static.megaphone.fm/podcasts/f23b021e-a9a3-11e5-8768-bfc7a8ea314d/image/uploads_2F1517245218052-chutdg7xnlh-a4988f407d3afb297332b6e225d69283_2F20171116_StartUp-ShowCover.png",
        url: "https://www.gimletmedia.com/startup/1-how-not-to-pitch-a-billionaire#episode-player",
    },
    {
        title: "The Ground Up Show",
        author: "Matt D'Avella",
        cover: "https://static.libsyn.com/p/assets/5/7/7/e/577e5e2dd9537715/groundupthumb051818.jpg",
        url: "https://mattdavella.com/podcast",
    },
    {
        title: "WorkLife w/ Adam Grant",
        author: "TED",
        cover: "https://f.prxu.org/131/images/9192b58e-87b9-4d98-a774-51e146c7e475/TED_WorkLife_Logo_3000x3000_v2.jpg",
        url: "https://www.ted.com/series/worklife-with-adam-grant",
    },
    {
        title: "The Colin and Samir Podcast",
        author: "Colin and Samir",
        cover: "https://static.libsyn.com/p/assets/e/3/8/a/e38a6ba3e41fe214/COLSAM_pod_1440.jpg",
        url: "https://www.colinandsamir.com/the-podcast/",
    },
    {
        title: "Y Combinator",
        author: "Y Combinator",
        cover: "https://feeds.backtracks.fm/feeds/series/cb81757a-3054-11e7-89cf-0e1b887eb36a/images/main.jpg?1530262800351",
        url: "https://blog.ycombinator.com/category/podcast/",
    },
    {
        title: "Indie Hackers",
        author: "Courtland Allen",
        cover: "https://feeds.backtracks.fm/feeds/series/fafac956-68a7-11e7-9428-0e6e2408d686/images/main.jpg?1530230400343",
        url: "https://www.indiehackers.com/podcast",
    },
    {
        title: "Views w/ David Dobrik and Jason Nash",
        author: "Cadence13",
        cover: "https://content.production.cdn.art19.com/images/c0/b4/fa/08/c0b4fa08-1788-45bc-9c85-36a64f9658a0/1ea263069b2cd2746b55460ac6ee2d25d3f4c9aecbc1e651439fb050d102b8bb4c82ee123f9d04286c43ac5cd18dabf5514405aedfbc5a7ac28612e65f379c76.jpeg",
        url: "https://open.spotify.com/show/1vPkGMyrKXdbYWHxSw9kd1",
    },
    {
        title: "Accidental Tech Podcast",
        author: "Marco, John, and Casey",
        cover: "http://static1.squarespace.com/static/513abd71e4b0fe58c655c105/t/52c45a37e4b0a77a5034aa84/1388599866232/1500w/Artwork.jpg",
        url: "https://tessopen.page.link/listen?-LHoIcPnbuuY9rHyzZCh"
    },
];

const list = podcasts
    .map(podcasts => {
        return {
            ...podcasts,
            title: podcasts.title.replace(/ ([^ ]*)$/, '\u00A0$1'),
        }
    })
    .sort((a, b) => strippedTitle(a.title).localeCompare(strippedTitle(b.title)))

export default function PodcastList() {
    return <div className="library">
        {list.map(({title, author, cover, url}) => (
            <Podcast
                author={author}
                cover={cover}
                title={title}
                url={url}
                key={title}
            />
        ))}
    </div>
}
